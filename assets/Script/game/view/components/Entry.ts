/**
 * 视图控制类
 * @author dk
 * 2020-06-20
 */

import AppFacade from "../../AppFacade";
import NotifDefEntry from "../../notifiDef/NotifDefEntry";
import EntryMediator from "../mediators/EntryMediator";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Entry extends cc.Component {

    @property(cc.Node)
    btn: cc.Node = null;

    @property(cc.Label)
    nickname: cc.Label = null;

    onLoad() {
        this.btn.on("click", () => {
            AppFacade.getInstance().sendNotification(NotifDefEntry.CLICK_BTN, "我的名叫阿甘");
        }, this)
    }

    start() {
        AppFacade.getInstance().registerMediator(new EntryMediator(this));
    }

    onDestroy() {
        AppFacade.getInstance().removeMediator(EntryMediator.NAME);
    }

    public setNickName(data) {
        this.nickname.string = data;
    }

}
