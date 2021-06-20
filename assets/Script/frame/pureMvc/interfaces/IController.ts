/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 Controller
 * @author DK
 * 2021-06-19
 */

import INotification from "./INotification";

export default interface IController {

    /**
     * 执行命令
     * @param notification 
     */
    excuteCommand(notification: INotification): void;

    /**
     * 注册命令
     * @param notificationName 命令的名字
     * @param commandClassRef 实现类的构造函数
     */
    registerCommand(notificationName: string, commandClassRef: Function): void;

    /**
     * 是否包含此命令
     * @param notificationName 
     */
    hasCommand(notificationName: string): boolean;

    /**
     * 删除命令
     * @param notificationName 
     */
    removeCommand(notificationName: string): void;

}