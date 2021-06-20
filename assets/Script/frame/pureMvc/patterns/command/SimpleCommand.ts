/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 单命令执行类
 * @author DK
 * 2021-06-19
 */

import ICommand from "../../interfaces/ICommand";
import INotification from "../../interfaces/INotification";
import INotifier from "../../interfaces/INotifier";
import Notifier from "../observer/Notifier";

export default class SimpleCommand extends Notifier implements ICommand, INotifier {


    /**
     * 执行命令
     * @param notification 
     */
    execute(notification: INotification): void {
    }
}