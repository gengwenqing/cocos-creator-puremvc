import INotification from "../../../frame/pureMvc/interfaces/INotification";
import Mediator from "../../../frame/pureMvc/patterns/mediator/Mediator";
import NotifDefEntry from "../../notifiDef/NotifDefEntry";
import Entry from "../components/Entry";

/**
 * 入口中介
 * 1) 游戏场景
 * 2) 
 * @author dk
 * 2021-06-20
 */
export default class EntryMediator extends Mediator {

    /**名称 */
    public static NAME: string = "EntryMediator";

    /**组件 */
    public viewComponent: Entry;

    public constructor(viewComponent: Entry) {
        super(EntryMediator.NAME, viewComponent);
    }

    /**事件监听 */
    public listNotificationInterests(): string[] {
        return [
            NotifDefEntry.SET_NICKNAME
        ];
    }

    /**处理事件监听 */
    public handleNotification(notification: INotification): void {
        switch (notification.getName()) {
            case NotifDefEntry.SET_NICKNAME:
                this.viewComponent.setNickName(notification.getBody());
                break;
        }
    }

    /**注册的时候被调用 */
    public onRegister() {
        console.log("############### MVC" + "中介类被注册");
    }

    /**删除的时候被调用 */
    public onRemove() {
        console.log("############### MVC" + "中介类被删除");
    }


}