/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 IObserver
 * 观察者 接口
 * @author DK
 * 2021-06-19
 */

import INotification from "./INotification";

export default interface IObserver {

    /**
     * 设置观察者的回调方法
     * @param notifyMethod 
     */
    setNotifyMethod(notifyMethod: Function): void;

    /**
     * 设置观察者的执行域
     * @param notifyContext 
     */
    setNotifyContext(notifyContext: any): void;

    /**
     * 通知感兴趣的对象
     * @param notification 
     */
    notifyObserver(notification: INotification): void;

    /**
     * 对比执行域
     * @param object 
     */
    compareNotifyContext(object: any): boolean;
}