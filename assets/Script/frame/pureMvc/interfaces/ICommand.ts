/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 Controller
 * @author DK
 * 2021-06-19
 */

import INotification from "./INotification";
import INotifier from "./INotifier";

export default interface ICommand extends INotifier {

    /**执行命令 */
    execute(notification: INotification): void;
}