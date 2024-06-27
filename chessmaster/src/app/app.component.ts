import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';
import { LoginCognitoComponent } from './login-cognito/login-cognito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginCognitoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chessmaster';
}
