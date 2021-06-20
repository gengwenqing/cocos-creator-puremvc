// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import AppFacade from "./AppFacade";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property(cc.Node)
    btn: cc.Node = null

    @property(cc.Node)
    popLayer: cc.Node = null

    start() {
        this.appStart();
    }

    public appStart() {

        AppFacade.getInstance().startUp();

    }

    onClick() {
        cc.resources.load("Prefabs/Entry", cc.Prefab, (error, asserts) => {
            let node: any = cc.instantiate(asserts);
            this.popLayer.addChild(node);
        })
    }

}
