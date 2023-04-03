import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../edit/edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public fileToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectservice: ProjectService,
    private _uploadservices: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar projecto"
    this.status = ''
    this.fileToUpload = []
    this.project = new Project('', '', '', '', '', '');
    this.url = global.url


  }


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);
    })
  }

  getProject(id): void {

    this._projectservice.getProject(id).subscribe(
      response => {
        this.project = response.project


      },
      error => {
        console.log(<any>error);

      }

    )
  }

  onSubmit(form: any) {
    console.log(this.project);
    this._projectservice.updateProject(this.project).subscribe(
      response => {
        if (response.project) {

          // subir la imagen
          if (this.fileToUpload.length >= 1) {

            this._uploadservices.makeFileRequest(global.url + "upload-image/" + response.project._id, [], this.fileToUpload, 'image')
              .then((result: any) => {
                this.status = 'success';
                console.log(result);


              });
          }else {
            this.status = 'success';
            
          }

        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error);

      }
    )



  }

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = <Array<File>>fileInput.target.files;

  }

}