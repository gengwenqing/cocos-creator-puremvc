/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * @author DK
 * View类
 * 2021-06-19
 */

import IMediator from "../interfaces/IMediator";
import INotification from "../interfaces/INotification";
import IObserver from "../interfaces/IObserver";
import IView from "../interfaces/IView";
import Observer from "../patterns/observer/Observer";

export default class View implements IView {

    /**中介map */
    protected mediatorMap: Object = null;

    /**观察者map */
    protected observerMap: object = null;

    /**单例 key */
    multitonKey: string = null;

    constructor(key: string) {
        if (View.instanceMap[key])
            throw Error(View.MULTITON_MSG);

        View.instanceMap[key] = this;

        this.multitonKey = key;
        this.mediatorMap = {};
        this.observerMap = {};
        this.initializeView();
    }

    /** 子类继承 并初始化函数*/
    initializeView(): void {

    }

    /**
     * 注册观察者
     * @param notificationName 通知名称
     * @param observer 通知的观察者
     */
    registerObserver(notificationName: string, observer: IObserver): void {
        let observers: IObserver[] = this.observerMap[notificationName];
        if (observers)
            observers.push(observer);
        else
            this.observerMap[notificationName] = [observer];
    }

    /**
     * 删除观察者
     * @param notificationName  通知名称
     * @param notifyContext  观察者 执行域
     */
    removeObserver(notificationName: string, notifyContext: any): void {
        let observers: IObserver[] = this.observerMap[notificationName];
        let i: number = observers.length;
        while (i--) {
            let observer: IObserver = observers[i];
            if (observer.compareNotifyContext(notifyContext)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0)
            delete this.observerMap[notificationName];
    }

    /**
     * 响应观察者
     * @param notification 
     */
    notifyObservers(notification: INotification): void {
        let notificationName: string = notification.getName();
        let observersRef = this.observerMap[notificationName];
        if (observersRef) {
            // 复制数组
            let observers = observersRef.slice(0);
            let len = observers.length;
            for (let i = 0; i < len; i++) {
                let observer: IObserver = observers[i];
                observer.notifyObserver(notification);
            }
        }
    }

    /**
     * 注册 中介
     * @param mediator 
     * @returns 
     */
    registerMediator(mediator: IMediator): void {
        let name: string = mediator.getMediatorName();

        if (this.mediatorMap[name])
            return;

        mediator.initializeNotifier(this.multitonKey);

        //Register the Mediator for retrieval by name.
        this.mediatorMap[name] = mediator;

        console.log("mediator.listNotificationInterests()" + mediator.listNotificationInterests());
        //Get Notification interests, if any.
        let interests: string[] = mediator.listNotificationInterests();
        let len: Number = interests.length;
        if (len > 0) {
            //Create Observer referencing this mediator's handlNotification method.
            let observer: IObserver = new Observer(mediator.handleNotification, mediator);

            //Register Mediator as Observer for its list of Notification interests.
            for (let i: number = 0; i < len; i++)
                this.registerObserver(interests[i], observer);
        }

        //Alert the mediator that it has been registered.
        mediator.onRegister();
    }

    retrieveMediator(mediatorName: string): IMediator {
        //Return a strict null when the mediator doesn't exist
        return this.mediatorMap[mediatorName] || null;
    }

    removeMediator(mediatorName: string): IMediator {
        let mediator: IMediator = this.mediatorMap[mediatorName];
        if (!mediator)
            return null;

        //Get Notification interests, if any.
        let interests: string[] = mediator.listNotificationInterests();

        //For every notification this mediator is interested in...
        let i: number = interests.length;
        while (i--)
            this.removeObserver(interests[i], mediator);

        // remove the mediator from the map
        delete this.mediatorMap[mediatorName];

        //Alert the mediator that it has been removed
        mediator.onRemove();

        return mediator;
    }

    hasMediator(mediatorName: string): boolean {
        return this.mediatorMap[mediatorName] != null;
    }


    /**
     * Error message used to indicate that a <code>View</code> singleton instance is
     * already constructed for this multiton key.
     *
     * @constant
     * @protected
     */
    static MULTITON_MSG: string = "View instanc 已经被构造";

    /**单例 map */
    static instanceMap: Object = {};

    /**
     * 获取单例
     * @param key 
     * @returns 
     */
    static getInstance(key: string): IView {
        if (!View.instanceMap[key])
            View.instanceMap[key] = new View(key);

        return View.instanceMap[key];
    }

    /**
     * 删除单例
     */
    static removeView(key: string): void {
        delete View.instanceMap[key];
    }
}