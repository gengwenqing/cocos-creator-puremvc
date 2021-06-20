/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 IView
 * 通知接口
 * @author DK
 * 2021-06-19
 */

import IMediator from "./IMediator";
import INotification from "./INotification";
import IObserver from "./IObserver";

export default interface IView{

    /**
     * 注册观察者对象
     * @param notificationName 
     * @param observer 
     */
    registerObserver( notificationName:string, observer:IObserver ):void;

    /**
     * 删除观察者
     * @param notificationName 
     * @param notifyContext 
     */
    removeObserver( notificationName:string, notifyContext:any ):void;

    /**
     * 通知观察者
     * @param notification 
     */
    notifyObservers( notification:INotification ):void;

    /**
     * 注册midator
     * @param mediator 
     */
    registerMediator( mediator:IMediator ):void;

    /**
     * 恢复mediator
     * @param mediatorName 
     */
    retrieveMediator( mediatorName:string ):IMediator;

    /**
     * 删除mediator
     * @param mediatorName 
     */
    removeMediator( mediatorName:string ):IMediator;

    /**
     * 查看是否包含mediator
     * @param mediatorName 
     */
    hasMediator( mediatorName:string ):boolean;
}