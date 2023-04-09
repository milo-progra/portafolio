import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Input() etiquetas:boolean;
  @Output() conseguirAutor = new EventEmitter()
  public autor:any;

  constructor() { 
    this.autor = {
      nombre : "fabian Salazar",
      webside : "fabian@ss.cl",
      youtube: "Fabian Salazar FSS"
    }
  }

  ngOnInit(): void {
    $("#logo").click(function () {
      $("header")
          .css("background", "green")
          .css("height", "50px");
 
    });
    $(".galeria").bxSlider({
      mode: 'fade',
      captions: this.etiquetas,
      slideWidth: this.anchura
    });
  }

  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }

}
