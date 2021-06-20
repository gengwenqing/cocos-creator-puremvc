/**
 * 启动 注册 视图类
 *  在游戏中比较特殊的
 *  1) 需要弹窗的时候, 才去构建中介 view之间的关系
 *  2)   
 * @author dk
 * 2021-06-20
 */

import ICommand from "../../../frame/pureMvc/interfaces/ICommand";
import INotification from "../../../frame/pureMvc/interfaces/INotification";
import SimpleCommand from "../../../frame/pureMvc/patterns/command/SimpleCommand";


export default class BootstrapViews extends SimpleCommand implements ICommand {
    public constructor() {
        super();
    }

    public execute(notification: INotification): void {
        console.log("############### MVC" + "注册 数据代理");
        //this.facade().registerMediator();
    }
}