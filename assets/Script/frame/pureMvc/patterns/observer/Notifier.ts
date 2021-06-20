/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 通知者类
 * @author DK
 * 2021-06-19
 */

import IFacade from "../../interfaces/IFacade";
import INotifier from "../../interfaces/INotifier";
import Facade from "../facade/Facade";

export default class Notifier implements INotifier {

    /**多核key */
    protected multitonKey: string = null;


    /**
     * 创建 并且发送一个通知
     * @param name 
     * @param body 
     * @param type 
     */
    sendNotification(name: string, body?: any, type?: string): void {
        if (this.facade())
            this.facade().sendNotification(name, body, type);
    }

    /**
     * 初始化 notifier
     * @param key 
     */
    initializeNotifier(key) {
        this.multitonKey = key;
    }

    /**获取 facade单例 */
    facade(): IFacade {
        if (this.multitonKey === null)
            throw Error(Notifier.MULTITON_MSG);

        return Facade.getInstance(this.multitonKey);
    }

    static MULTITON_MSG: string = "multitonKey 已经被构造";



}