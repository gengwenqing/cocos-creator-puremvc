
/**
 * 启动 注册 模型类
 * @author dk
 * 2021-06-20
 */

import ICommand from "../../../frame/pureMvc/interfaces/ICommand";
import INotification from "../../../frame/pureMvc/interfaces/INotification";
import SimpleCommand from "../../../frame/pureMvc/patterns/command/SimpleCommand";
import GameProxy from "../../model/GameProxy";

export default class BootstrapModels extends SimpleCommand implements ICommand {
    public constructor() {
        super();
    }

    public execute(notification: INotification): void {

        console.log("############### MVC" + "注册 数据代理");
        this.facade().registerProxy(new GameProxy());
        // this.facade.registerProxy(new WebSocketProxy());
    }
}