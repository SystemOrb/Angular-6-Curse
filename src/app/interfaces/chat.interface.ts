//DEFAULT INTERFACE FOR CHAT BOX
export interface chatType {
    senderName:string;
    message:string,
    date:number,
    photo:string,
    key$?:string;
}
