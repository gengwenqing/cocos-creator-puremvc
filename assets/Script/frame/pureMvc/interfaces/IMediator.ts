/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 IMediator
 * @author DK
 * 2021-06-19
 */

import INotification from "./INotification";
import INotifier from "./INotifier";

export default interface IMediator  extends INotifier{

    /**
     * 获取 mediator 名字
     */
    getMediatorName(): string;

    /**
     * 获取 mediator 管理的组件
     */
    getViewComponent(): any;

    /**
     * 设置组件
     * @param viewComponent 
     */
    setViewComponent(viewComponent: any): void;

    /**
     * 获取 mediator 通知列表
     */
    listNotificationInterests(): string[];

    /**
     * 处理 通知的函数
     * 通常 switch(notification.name){
     *      case "A":
     *          break;
     * }
     * @param notification 
     */
    handleNotification(notification: INotification): void;

    /**
     * 当mediator 被注册时被 view调用,这个方法必须被子类覆盖, 以便知道实例何时被注册
     */
    onRegister(): void;

    /**
     * 当中介被移除时，视图调用。这个方法必须被子类覆盖，以便知道何时删除实例。
     */
    onRemove(): void;
}