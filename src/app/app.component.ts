import { Component } from '@angular/core';
import { SocialLoginService } from './services/social-login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  array:any = {}
  constructor(public socialLogin:SocialLoginService) {

  }
}
