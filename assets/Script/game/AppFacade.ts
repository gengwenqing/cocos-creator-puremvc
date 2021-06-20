
/**
 * pureMvc启动类
 * @author dk
 * 2021-06-20
 */

import IFacade from "../frame/pureMvc/interfaces/IFacade";
import Facade from "../frame/pureMvc/patterns/facade/Facade";
import StartupCommand from "./controller/StartupCommand";

export default class AppFacade extends Facade implements IFacade {


    /**单例 */
    public static instance: AppFacade;

    /**启动事件 */
    public static STARTUP: string = "START_UP";

    /*多核key */
    public static MVC_KEY: string = "DK";


    /**
     * 获取单例
     * @returns 
     */
    public static getInstance(): AppFacade {
        if (!AppFacade.instance) {
            AppFacade.instance = new AppFacade(AppFacade.MVC_KEY);
        }

        return AppFacade.instance;
    }

    /**
     * 启动函数
     */
    public startUp() {
        this.sendNotification(AppFacade.STARTUP);
        this.removeCommand(AppFacade.STARTUP);
        console.log("############### MVC" + "注册启动命令");
    }

    /** 复写 父类函数 */
    public initializeFacade(): void {
        super.initializeFacade();
    }

    /**复写 父类函数 */
    public initializeModel(): void {
        super.initializeModel();
    }

    /**复写 父类函数 */
    public initializeController(): void {
        super.initializeController();
        this.registerCommand(AppFacade.STARTUP, StartupCommand);
    }

    /**复写 父类函数 */
    public initializeView(): void {
        super.initializeView();
    }
}