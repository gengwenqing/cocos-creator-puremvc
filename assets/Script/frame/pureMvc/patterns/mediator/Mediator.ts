/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 中介类
 * @author DK
 * 2021-06-19
 */

import IMediator from "../../interfaces/IMediator";
import INotification from "../../interfaces/INotification";
import INotifier from "../../interfaces/INotifier";
import Notifier from "../observer/Notifier";

export default class Mediator extends Notifier implements IMediator, INotifier {

    /**视图代理名称 */
    protected mediatorName: string = null;

    /**视图组件 */
    protected viewComponent: any = null;

    constructor(mediatorName: string = null, viewComponent: any = null) {
        super();

        this.mediatorName = mediatorName;
        this.viewComponent = viewComponent;
    }

    getMediatorName(): string {
        return this.mediatorName;
    }

    getViewComponent() {
        return this.viewComponent;
    }

    setViewComponent(viewComponent: any): void {
        this.viewComponent = viewComponent;
    }

    listNotificationInterests(): string[] {
        return new Array<string>();
    }

    /**
     * 子类实现
     * @param notification 
     */
    handleNotification(notification: INotification): void {

    }
    /**
     *  子类实现
     */
    onRegister(): void {
    }

    /**
     *  子类实现
     */
    onRemove(): void {
    }

    /**名称 */
    static NAME: string = 'Mediator';
}