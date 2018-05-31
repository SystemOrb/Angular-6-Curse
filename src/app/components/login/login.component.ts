import { Component} from '@angular/core';
import { SocialLoginService } from '../../services/social-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(public socialLogin:SocialLoginService) { }

  AuthLogin(platform:string)
  {
    this.socialLogin.login(platform);
  }
  AuthLogout()
  {
    this.socialLogin.logout();
  }

}
