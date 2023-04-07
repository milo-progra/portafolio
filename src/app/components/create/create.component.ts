import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from 'src/app/services/global';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public fileToUpload: Array<File>;

  constructor(private projectservice: ProjectService, private uploadservices:UploadService) {
    this.title = "Crear projecto"
    this.project = new Project('','','','','','');
    this.status = ''
    this.fileToUpload = []
    
    
  }

  ngOnInit(): void {
  }


  onSubmit(form:any){
    console.log(this.project);
    this.projectservice.saveProject(this.project).subscribe(
      response =>{
        
        if(response.project){
          
          // subir la imagen
          this.uploadservices.makeFileRequest(global.url+"upload-image/"+response.project._id, [],this.fileToUpload, 'image')
          .then((result:any) =>{
            this.status = 'success';
            console.log(result);
            form.reset();
            
          });

        }else{
          this.status = 'failed';
        }
        
      },error => {
        console.log(<any>error);        
      }
    )    
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;
    
  }

}
