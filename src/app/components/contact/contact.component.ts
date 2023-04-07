import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public widthSlider:number;
  public anchuraToSlider:number;
  public captions:boolean;
  public autor:any;

  constructor() { 
    this.captions = false;
  }

  ngOnInit(): void {
    
  }
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = NaN;
  }

  getAutor(event){
    console.log(event);
    
    this.autor = event;
    
  }


}
