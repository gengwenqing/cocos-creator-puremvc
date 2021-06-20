/**
 * PureMvc 复写
 * 将源码直接引入项目中
 *  facade类 mvc 之间的调用 通过 facade
 * @author DK
 * 2021-06-19
 */

import Controller from "../../core/Controller";
import Model from "../../core/Model";
import View from "../../core/View";
import IController from "../../interfaces/IController";
import IFacade from "../../interfaces/IFacade";
import IMediator from "../../interfaces/IMediator";
import IModel from "../../interfaces/IModel";
import INotification from "../../interfaces/INotification";
import IProxy from "../../interfaces/IProxy";
import IView from "../../interfaces/IView";
import Notification from "../observer/Notification";

export default class Facade implements IFacade {

    /**模型类 */
    protected model: IModel = null;

    /**view类 */
    protected view: IView = null;

    /**控制类 */
    protected controller: IController = null;

    /**多核key */
    protected multitonKey: string = null;

    constructor(key) {
        if (Facade.instanceMap[key])
            throw Error(Facade.MULTITON_MSG);
        this.initializeNotifier(key);

        Facade.instanceMap[key] = this;
        this.initializeFacade();
    }

    /**
     * 初始化 facade
     */
    initializeFacade(): void {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    }

    /**
     * 初始化Model
     */
    initializeModel(): void {
        if (!this.model)
            this.model = Model.getInstance(this.multitonKey);
    }

    /**
     * 初始化controller
     */
    initializeController(): void {
        if (!this.controller)
            this.controller = Controller.getInstance(this.multitonKey);
    }

    /**
     * 初始化view
     */
    initializeView(): void {
        if (!this.view)
            this.view = View.getInstance(this.multitonKey);
    }


    /**注册命令 */
    registerCommand(notificationName: string, commandClassRef: Function): void {
        this.controller.registerCommand(notificationName, commandClassRef);
    }

    /**
     * 删除命令
     * @param notificationName 
     */
    removeCommand(notificationName: string): void {
        this.controller.removeCommand(notificationName);
    }

    /**
     * 是否包含命令
     * @param notificationName 
     */
    hasCommand(notificationName: string): boolean {
        return this.controller.hasCommand(notificationName);
    }

    /**
     * 注册数据代理类
     * @param proxy 
     */
    registerProxy(proxy: any): void {
        this.model.registerProxy(proxy);
    }

    /**
     * 恢复数据代理类
     * @param proxyName 
     */
    retrieveProxy(proxyName: string) {
        return this.model.retrieveProxy(proxyName);
    }

    /**
     * 删除数据代理类
     * @param proxyName 
     */
    removeProxy(proxyName: string): IProxy {
        let proxy: IProxy;
        if (this.model)
            proxy = this.model.removeProxy(proxyName);
        return proxy
    }

    /**
     * 是否包含数据代理类
     * @param proxyName 
     */
    hasProxy(proxyName: string): boolean {
        return this.model.hasProxy(proxyName);
    }

    /**
     * 注册视图代理类
     * @param mediator 
     */
    registerMediator(mediator: IMediator): void {
        if (this.view)
            this.view.registerMediator(mediator);
    }

    /**
     * 恢复 视图代理类
     * @param mediatorName 
     */
    retrieveMediator(mediatorName: string): IMediator {
        return this.view.retrieveMediator(mediatorName);
    }

    /**
     * 删除代理类
     * @param mediatorName 
     */
    removeMediator(mediatorName: string): IMediator {
        let mediator: IMediator;
        if (this.view)
            mediator = this.view.removeMediator(mediatorName);
        return mediator;
    }

    /**
     * 是否包含代理视图代理类
     * @param mediatorName 
     */
    hasMediator(mediatorName: string): boolean {
        return this.view.hasMediator(mediatorName);
    }

    /**
     * 响应观察者们
     * @param notification 
     */
    notifyObservers(notification: INotification): void {
        if (this.view)
            this.view.notifyObservers(notification);
    }

    /**
     * 创建并发送一个通知
     * @param name 
     * @param body 
     * @param type 
     */
    sendNotification(name: string, body?: any, type?: string): void {
        this.notifyObservers(new Notification(name, body, type));
    }

    /**
     * 初始化通知者
     * @param key 
     */
    initializeNotifier(key: string): void {
        this.multitonKey = key;
    }

    /**
     * @constant
     * @protected
     */
    static MULTITON_MSG: string = "Facade instance 已经被构造";

    /**
     * <code>Facade</code> singleton instance map.
     *
     * @protected
     */
    static instanceMap: Object = {};

    /**
       * <code>Facade</code> multiton factory method.
     * 
     * @param key
     *		The multiton key of the instance of <code>Facade</code> to create or retrieve.
     * 
     * @return
     * 		The singleton instance of <code>Facade</code>.
     */
    static getInstance(key: string): IFacade {
        if (!Facade.instanceMap[key])
            Facade.instanceMap[key] = new Facade(key);

        return Facade.instanceMap[key];
    }

}