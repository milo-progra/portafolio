import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string
  public project: Project;
  public confirm:boolean = false;
  

  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
    ) {
    this.url = global.url
    
    
  }


  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this.getProject(id);
    })  
  }

  getProject(id): void{
  
    this._projectService.getProject(id).subscribe(
      response =>{
          this.project = response.project
      },
      error =>{
        console.log(<any>error);
        
      }
      
    )
  }

  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        console.log("ESTOY FUERA DEL IF");
        if (response.project) {
          this._router.navigate(['/proyectos'])
          console.log("estoy dentro del if");
          
          
          
        }

      },
      error =>{
        console.log(<any>error);
        
      }
    )
  }

  setConfirm(confirmParm:boolean){
    this.confirm = confirmParm;
  }

    

}
