/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 IProxy
 * 通知接口
 * @author DK
 * 2021-06-19
 */

import INotifier from "./INotifier";

export default interface IProxy extends INotifier {

    /** 获取 代理名称 */
    getProxyName(): string;

    /**设置代理的数据模型 */
    setData(data: any): void;

    /**获取该数据代理的数据 */
    getData(): any;

    /**子类需要实现的 注册函数 */
    onRegister(): void;

    /**删除的时候调用函数, 子类实现 */
    onRemove(): void;

}