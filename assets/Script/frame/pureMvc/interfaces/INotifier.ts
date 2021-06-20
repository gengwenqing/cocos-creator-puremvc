/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 INotifier
 * 通知接口
 * @author DK
 * 2021-06-19
 */

export default interface INotifier {

    /**创建 并发送一个通知 */
    sendNotification(name: string, body?: any, type?: string): void;

    /**初始化 notify 通过key */
    initializeNotifier(key: string): void;
}