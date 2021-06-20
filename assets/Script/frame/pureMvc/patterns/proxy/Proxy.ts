/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 通知类
 * @author DK
 * 2021-06-19
 */

import INotifier from "../../interfaces/INotifier";
import IProxy from "../../interfaces/IProxy";
import Notifier from "../observer/Notifier";

export default class Proxy extends Notifier implements IProxy, INotifier {

    /**属性名称 */
    protected proxyName: string = null

    /**数据类 */
    protected data: any = null;

    constructor(proxyName: string = null, data: any = null) {
        super();

        this.proxyName = (proxyName != null) ? proxyName : Proxy.NAME;

        if (data != null)
            this.setData(data);
    }

    getProxyName(): string {
        return this.proxyName;
    }

    setData(data: any): void {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    /**
     * 被注册的时候调用
     */
    onRegister(): void {

    }

    /**
     * 被删除的时候调用
     */
    onRemove(): void {

    }

    /**
     * The default name of the <code>Proxy</code>
     * 
     * @type
     * @constant
     */
    static NAME: string = "Proxy";

}