/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 多命令执行类
 * @author DK
 * 2021-06-19
 */

import ICommand from "../../interfaces/ICommand";
import INotification from "../../interfaces/INotification";
import INotifier from "../../interfaces/INotifier";
import Notifier from "../observer/Notifier";

export default class MacroCommand extends Notifier implements ICommand, INotifier {

    /**子命令合集 */
    protected subCommands: Function[] = null;

    constructor() {
        super();
        this.subCommands = new Array<Function>();
        this.initializeMacroCommand();
    }

    /**供子类调用 */
    initializeMacroCommand() {

    }

    /**
     * 添加子命令及
     * @param commandClassRef 
     */
    addSubCommand(commandClassRef: Function): void {
        this.subCommands.push(commandClassRef);
    }

    /**
     * 执行函数
     * @param notification 
     */
    execute(notification: INotification): void {
        let subCommands: Function[] = this.subCommands.slice(0);
        let len: number = this.subCommands.length;
        for (let i: number = 0; i < len; i++) {
            /*
             * Typed any here instead of <code>Function</code> ( won't compile if set to Function
             * because today the compiler consider that <code>Function</code> is not newable and
             * doesn't have a <code>Class</code> type)
             */
            let commandClassRef: any = subCommands[i];
            let commandInstance: ICommand = <ICommand> /*</>*/ new commandClassRef();
            commandInstance.initializeNotifier(this.multitonKey);
            commandInstance.execute(notification);
        }

        this.subCommands.splice(0);
    }

}