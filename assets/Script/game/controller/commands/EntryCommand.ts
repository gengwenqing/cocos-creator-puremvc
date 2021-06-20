import ICommand from "../../../frame/pureMvc/interfaces/ICommand";
import INotification from "../../../frame/pureMvc/interfaces/INotification";
import SimpleCommand from "../../../frame/pureMvc/patterns/command/SimpleCommand";
import GameProxy from "../../model/GameProxy";
import NotifDefEntry from "../../notifiDef/NotifDefEntry";

/**
 * 游戏命令类
 * @author dk
 * 注册命令 和 响应函数
 * 2021-06-20
 */
export default class EntryCommand extends SimpleCommand implements ICommand {

    public constructor() {
        super();
    }

    public static NAME: string = 'EntryCommand';



    /**
     * 注册消息
     */
    public register(): void {
        this.facade().registerCommand(NotifDefEntry.CLICK_BTN, EntryCommand);  //点击按钮
    }

    public execute(notification: INotification): void {
        switch (notification.getName()) {
            case NotifDefEntry.CLICK_BTN:
                this.clickBtn();
                break;
        }
    }

    /**
     * 点击按钮以后 ,从 数据代理哪里拿对象,并且返回
     */
    private clickBtn() {
        let gameProxy: GameProxy = this.facade().retrieveProxy(GameProxy.NAME) as GameProxy;
        this.facade().sendNotification(NotifDefEntry.SET_NICKNAME, gameProxy.getData().nickName);
    }
}