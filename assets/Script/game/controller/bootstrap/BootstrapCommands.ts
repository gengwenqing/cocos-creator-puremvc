/**
 * 命令处理类
 * @author dk
 * 2021-06-20
 */

import ICommand from "../../../frame/pureMvc/interfaces/ICommand";
import INotification from "../../../frame/pureMvc/interfaces/INotification";
import SimpleCommand from "../../../frame/pureMvc/patterns/command/SimpleCommand";
import AppFacade from "../../AppFacade";
import EntryCommand from "../commands/EntryCommand";

export default class BootstrapCommands extends SimpleCommand implements ICommand {

    public constructor() {
        super();
    }

    public execute(notification: INotification): void {
        let command = new EntryCommand();
        command.initializeNotifier(AppFacade.MVC_KEY);
        command.register();
    }
}