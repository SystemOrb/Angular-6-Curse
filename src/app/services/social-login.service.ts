import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { user } from '../interfaces/user.interface';
import { map } from "rxjs/operators"; // MAP operator
@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  public user:any = {};
  constructor(public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(
          (res:any)=>{
            if(res!=null)
            {
              this.user.name = res.displayName;
              this.user.key = res.uid;
              this.user.photo = res.photoURL;
              this.user.logged = true;
            }else{
              return;
            }
          }
      );
  }
 //OBJECT FOR USERS
  //CALL LOGIN BUTTON
login(platform:string) {
  switch(platform)
  {
    case 'Google':
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    break;
    case 'Twitter':
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider);
    break;
    case 'Facebook':
      this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider);
    break;
  }
}
logout() {
 this.user = {}
  this.afAuth.auth.signOut();
}
}
