import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  sendMessage:string = '';//NGMODEL on the component
  constructor(public _chat:ChatService) {
    //WE WILL LOAD MESSAGES DIRECTLY ON THE BOX
       this._chat.loadMessages().subscribe(
            ( resp:any )=>{
               setTimeout( ()=>{
                 this.DOM.scrollTop = this.DOM.scrollHeight;
               },20);
            }
     );

   }
   DOM:any = '';
   ngOnInit()
   {
    this.DOM = document.getElementById('fireChat');
   }
   senderMessage()
   {
     if(this.sendMessage.length==0)
     {
       return null;
     }else{
      this._chat.sendMessage(this.sendMessage) //SEND MESSAGE
        .then( (response:any)=>{
          console.log(response);
          this.sendMessage = '';
        }).catch(
           (err:any)=>{
             console.error(err);
           }
        );
     }
   }


}
