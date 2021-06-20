/**
 * PureMvc 复写
 * 将源码直接引入项目中
 * 
 * 接口 INotification
 * 通知接口
 * @author DK
 * 2021-06-19
 */

 export default interface INotification
 {
     /**
      * Get the name of the <code>Notification</code> instance.
      * 
      * @return
      *		The name of the <code>Notification</code> instance.
      */
     getName():string;

     /**
      * Set the body of the <code>INotification</code>.
      *
      * @param body
      * 		The body of the notification instance.
      */
     setBody( body:any ):void;

     /**
      * Get the body of the <code>INotification</code>.
      * 
      * @return
      *		The body object of the <code>INotification</code>.
      */
     getBody():any;

     /**
      * Set the type of the <code>INotification</code>.
      *
      * @param type
      * 		The type identifier for the notification.
      */
     setType( type:string ):void;

     /**
      * Get the type of the <code>INotification</code>.
      * 
      * @return
      *		The type of the <code>INotification</code>.
      */
     getType():string;

     /**
      * Get a textual representation of the <code>Notification</code> instance.
      *
      * @return
      * 		The textual representation of the <code>Notification</code>	instance.
      */
     toString():string;
 }