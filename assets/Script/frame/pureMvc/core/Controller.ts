/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * @author DK
 * 2021-06-19
 */

import ICommand from "../interfaces/ICommand";
import IController from "../interfaces/IController";
import INotification from "../interfaces/INotification";
import IView from "../interfaces/IView";
import Observer from "../patterns/observer/Observer";
import View from "./View";

export default class Controller implements IController {

    /**view单例 */
    protected view: IView = null;

    /**命令map */
    protected commandMap: Object = null;

    /**多例模式的 key */
    protected multitonKey: string = null;

    constructor(key: string) {
        if (Controller.instanceMap[key])
            throw Error(Controller.MULTITON_MSG);
        Controller.instanceMap[key] = this;
        this.multitonKey = key;
        this.commandMap = {};
        this.initializeController();
    }

    /**
     * 初始化controller
     */
    protected initializeController(): void {
        this.view = View.getInstance(this.multitonKey);
    }

    /**
     * 执行 命令
     * @param notification 
     */
    excuteCommand(notification: INotification): void {
        let commandClassRef: any = this.commandMap[notification.getName()];
        if (commandClassRef) {
            let command: ICommand = <ICommand>new commandClassRef();
            command.initializeNotifier(this.multitonKey);
            command.execute(notification);
        }
    }

    /**
     * 注冊命令
     * @param notificationName 
     * @param commandClassRef 
     */
    registerCommand(notificationName: string, commandClassRef: Function): void {
        if (!this.commandMap[notificationName])
            this.view.registerObserver(notificationName, new Observer(this.excuteCommand, this));

        this.commandMap[notificationName] = commandClassRef;
    }

    /**
     * 是否包含命令
     * @param notificationName 
     * @returns 
     */
    hasCommand(notificationName: string): boolean {
        return this.commandMap[notificationName] != null;
    }

    /**
     * 删除命令
     * @param notificationName 
     */
    removeCommand(notificationName: string): void {
        if (this.hasCommand(notificationName)) {
            this.view.removeObserver(notificationName, this);
            delete this.commandMap[notificationName];
        }
    }

    /**单例已被构造的通知消息 */
    protected static MULTITON_MSG: string = "Controller 的单例 已经被构造";

    /**单例 map */
    protected static instanceMap: Object = {};

    /**单例获取方法 */
    static getInstance(key: string): IController {
        if (!Controller.instanceMap[key])
            Controller.instanceMap[key] = new Controller(key);

        return Controller.instanceMap[key];
    }

    /**
     * 删除controller
     * @param key 
     */
    static removeController(key: string): void {
        delete Controller.instanceMap[key];
    }

}