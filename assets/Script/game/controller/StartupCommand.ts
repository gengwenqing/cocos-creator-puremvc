import MacroCommand from "../../frame/pureMvc/patterns/command/MacroCommand";
import BootstrapCommands from "./bootstrap/BootstrapCommands";
import BootstrapModels from "./bootstrap/BootstrapModels";
import BootstrapViews from "./bootstrap/BootstrapViews";

/**
 * 启动命令处理类
 */
export default class StartupCommand extends MacroCommand {


    public initializeMacroCommand():void{
        console.log("############### MVC" + "响应多命令");
        super.initializeMacroCommand();
        this.addSubCommand(BootstrapCommands);
        this.addSubCommand(BootstrapModels);
        this.addSubCommand(BootstrapViews);
    }
}