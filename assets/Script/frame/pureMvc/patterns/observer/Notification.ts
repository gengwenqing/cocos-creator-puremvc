/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 通知类
 * @author DK
 * 2021-06-19
 */

import INotification from "../../interfaces/INotification";

export default class Notification implements INotification {

    private name: string = null;
    private body: any = null;
    private type: string = null;

    constructor(name: string, body: any = null, type: string = null) {
        this.name = name;
        this.body = body;
        this.type = type;
    }

    getName(): string {
        return this.name;
    }

    setBody(body: any): void {
        this.body = body;
    }

    getBody() {
        return this.body;
    }

    setType(type: string): void {
        this.type = type;
    }

    getType(): string {
        return this.type;
    }

    toString(): string {
        let msg: string = "Notification Name: " + this.getName();
        msg += "\nBody:" + ((this.getBody() == null) ? "null" : this.getBody().toString());
        msg += "\nType:" + ((this.getType() == null) ? "null" : this.getType());
        return msg;
    }


}
