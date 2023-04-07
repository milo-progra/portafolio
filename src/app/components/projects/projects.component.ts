import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { global } from 'src/app/services/global';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project [];
  public url: string;

  constructor(private projectService: ProjectService) { 
    this.projects = []
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(){
    this.projectService.getProjects().subscribe(
      response =>{
        // console.log(response);
        if (response.projects) {
          this.projects = response.projects;
        }
        
      },
      error =>{
        console.log(<any>error);
        
      }
    )
  }

}
