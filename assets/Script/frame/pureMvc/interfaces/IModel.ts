/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 IModel
 * @author DK
 * 2021-06-19
 */

import IProxy from "./IProxy";


export default interface IModel {

    /**注册模型代理 */
    registerProxy(proxy: IProxy): void;

    /**删除模型代理 */
    removeProxy(proxyName: string): IProxy;

    /**恢复模型代理 */
    retrieveProxy(proxyName: string): IProxy;

    /**是否已经包含模型代理 */
    hasProxy(proxyName: string): boolean;
}
