/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * @author DK
 * Model类
 * 2021-06-19
 */

import IModel from "../interfaces/IModel";
import IProxy from "../interfaces/IProxy";

export default class Model implements IModel {

    /**模型代理map */
    protected proxyMap: Object = null;

    /**多核key */
    protected multitonKey: string = null;

    constructor(key: string) {
        if (Model.instanceMap[key])
            throw Error(Model.MULTITON_MSG);

        Model.instanceMap[key] = this;
        this.multitonKey = key;
        this.proxyMap = {};

        this.initializeModel();
    }

    /**
     * 子类实现model
     */
    protected initializeModel(): void {

    }

    /**
     * 注册模型代理类
     * @param proxy 
     */
    registerProxy(proxy: IProxy): void {
        proxy.initializeNotifier(this.multitonKey);
        this.proxyMap[proxy.getProxyName()] = proxy;
        proxy.onRegister();
    }

    /**
     * 删除模型代理
     * @param proxyName 
     */
    removeProxy(proxyName: string): IProxy {
        let proxy: IProxy = this.proxyMap[proxyName];
        if (proxy) {
            delete this.proxyMap[proxyName];
            proxy.onRemove();
        }
        return proxy;
    }

    /**
     * 返回代理类
     * @param proxyName 
     */
    retrieveProxy(proxyName: string): IProxy {
        return this.proxyMap[proxyName] || null;
    }

    /**是否包含 */
    hasProxy(proxyName: string): boolean {
        return this.proxyMap[proxyName] != null;
    }

    /**已经的提示 */
    static MULTITON_MSG: string = "Model instance 已经被构造";

    /**单例map */
    static instanceMap: Object = {};

    /**
     * 获取单函数
     * @param key 
     * @returns 
     */
    static getInstance(key): IModel {
        if (!Model.instanceMap[key])
            Model.instanceMap[key] = new Model(key);

        return Model.instanceMap[key];
    }

    /**
     * 删除model
     * @param key 
     */
    static removeModel(key): void {
        delete Model.instanceMap[key];
    }

}