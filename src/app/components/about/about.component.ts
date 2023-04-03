import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public title: string;
public subtitle: string;
public email:String;
constructor() {
  this.title = "Fabian Salazar"
  this.subtitle = "Programador Angular"
  this.email = "fabian.salazar.se12@gmail.com"
}

  
ngOnInit(): void {
  }

}
