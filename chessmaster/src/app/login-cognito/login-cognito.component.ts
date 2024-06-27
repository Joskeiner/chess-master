import { Component } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ChessBoardComponent } from '../modules/chess-board/chess-board.component';

@Component({
  selector: 'app-login-cognito',
  standalone: true,
  imports: [AmplifyAuthenticatorModule,ChessBoardComponent],
  templateUrl: './login-cognito.component.html',
  styleUrl: './login-cognito.component.css'
})
export class LoginCognitoComponent {


  formFields = {
    signUp: {
      email: {
        order: 2
      }, 
    },
  };

}
