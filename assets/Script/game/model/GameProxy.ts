
import IProxy from "../../frame/pureMvc/interfaces/IProxy";
import Proxy from "../../frame/pureMvc/patterns/proxy/Proxy";
import UserInfo from "./vo/UserInfo";
/**
 * 创建游戏 数据代理类
 * @author dk
 * 2021-06-20
 */
export default class GameProxy extends Proxy implements IProxy {
    public static NAME: string = "GameProxy";

    /**实际的数据类型 */
    public vo: UserInfo = new UserInfo();

    public constructor() {
        super(GameProxy.NAME);
    }

    /**
     * 被注册调用
     */
    public onRegister() {
        this.setData(this.vo);
        console.log("GameProxy被调用");
    }

    /**
     * 被删除调用
     */
    public onRemove() {
        console.log("GameProxy被删除");
    }


}