import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/models/file-upload.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(private uploadService: FileUploadService,private auth:AuthService) { }

  ngOnInit(): void {
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          //percentage => {
          //  this.percentage = Math.round(percentage ? percentage : 0);
          //},
          {
            next:percentage => {this.percentage = Math.round(percentage ? percentage : 0)},
            error:(e)=> console.error,
            complete: () => console.info('complete') 
          }
          
        );
      }
    }
  }

  register() {
    this.auth.logout();
 }

}
