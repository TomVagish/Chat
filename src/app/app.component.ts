import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private title: Title) {
    this.title.setTitle( 'Chat' );
  }
  ngOnInit() {

  }


}
