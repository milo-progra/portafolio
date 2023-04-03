import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function () {
      $("header")
          .css("background", "green")
          .css("height", "50px");
 
    });
    $(".galeria").bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 500
    });
    
  
  }

}
