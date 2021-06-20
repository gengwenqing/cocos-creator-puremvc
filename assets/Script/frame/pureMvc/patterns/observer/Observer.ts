/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 观察者类
 * 
 *  触发回调函数
 * @author DK
 * 2021-06-19
 */

import INotification from "../../interfaces/INotification";
import IObserver from "../../interfaces/IObserver";


export default class Observer implements IObserver {

    private notify: Function = null;

    private context: any = null;

    constructor(notifyMethod: Function, notifyContext: any) {
        this.setNotifyContext(notifyContext);
        this.setNotifyMethod(notifyMethod);
    }
    /**
     * 获取回调方法
     * @returns 
     */
    private getNotifyMethod(): Function {
        return this.notify;
    }

    /**
     * 获取绑定的主体
     * @returns 
     */
    private getNotifyContext(): any {
        return this.context;
    }

    /**
     * 设置回调方法
     * @param notifyMethod 
     */
    setNotifyMethod(notifyMethod: Function): void {
        this.notify = notifyMethod;
    }

    /**
     * 设置执行域
     * @param notifyContext 
     */
    setNotifyContext(notifyContext: any): void {
        this.context = notifyContext;
    }

    /**
     * 响应函数
     * @param notification 
     */
    notifyObserver(notification: INotification): void {
        this.getNotifyMethod().call(this.getNotifyContext(), notification);
    }

    /**
     * 对比 notify的Context
     * @param object 
     * @returns 
     */
    compareNotifyContext(object: any): boolean {
        return object === this.context;
    }

}