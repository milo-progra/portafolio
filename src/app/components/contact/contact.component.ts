import { Component, OnInit, ViewChild } from '@angular/core';


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

  @ViewChild('textos',{static:true}) textos;

  constructor() { 
    this.captions = false;
  }

  ngOnInit(): void {
    console.log(this.textos.nativeElement.outerText);
    
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
