import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { chatType } from '../interfaces/chat.interface';
import { map } from "rxjs/operators"; // MAP operator
import { SocialLoginService } from './social-login.service';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<chatType>;
  public chatMessage:chatType[] = []; //Interface
  constructor(private afs: AngularFirestore,
              public socialLogin:SocialLoginService) { }
  loadMessages()
  {
    this.itemsCollection = this.afs.collection<chatType>('chat',query=>query.orderBy('date','desc').limit(5)); //Collection array from firebase
    return this.itemsCollection.valueChanges()
    .pipe(
      map( (chat:chatType[])=>{
           //this.chatMessage = chat;
           this.chatMessage = [];
           for(let newChat of chat)
           {
             this.chatMessage.unshift(newChat);
           }
      })
    ); // return a subscriber
  }
  sendMessage(message_:string)
  {
    let messageDemo:chatType = {
      senderName:this.socialLogin.user.name,
      message:message_,
      date: new Date().getTime(),
      photo:this.socialLogin.user.photo,
      key$: this.socialLogin.user.key,

    }
    return this.itemsCollection.add(messageDemo);
  }

}
