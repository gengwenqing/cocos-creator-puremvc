/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * IFacade 接口
 * @author DK
 * 2021-06-19
 */

import IMediator from "./IMediator";
import INotification from "./INotification";
import INotifier from "./INotifier";
import IProxy from "./IProxy";

export default interface IFacade extends INotifier {

    /**注册命令 */
    registerCommand(notificationName: string, commandClassRef: Function): void;

    /**删除命令 */
    removeCommand(notificationName: string): void;

    /**是否包含命令 */
    hasCommand(notificationName: string): boolean;

    /**注册model代理 */
    registerProxy(proxy: IProxy): void;

    /**返回一个model代理 */
    retrieveProxy(proxyName: string): IProxy;

    /**删除一个model代理 */
    removeProxy(proxyName: string): IProxy;

    /**是否包含model代理 */
    hasProxy(proxyName: string): boolean;

    /**注册视图代理 */
    registerMediator(mediator: IMediator): void;

    /**返回视图代理 */
    retrieveMediator(mediatorName: string): IMediator;

    /**删除视图代理 */
    removeMediator(mediatorName: string): IMediator;

    /**是否包视图代理 */
    hasMediator(mediatorName: string): boolean;

    /**通知观察者们 */
    notifyObservers(notification: INotification): void;

}