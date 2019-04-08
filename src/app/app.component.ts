import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mad-libs';
  appInput: string=null;
  otherInput: string=null;
  userName: string=null;
  hideTitle: boolean = true;
}

