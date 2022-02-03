import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/Employee';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {
  response: any;

subSink = new SubSink();

  constructor(public dialogRef: MatDialogRef<AddComponent>,
              private http: HttpClient) { }


  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
   const employee = this.employeeForm.value;
   this.subSink.add(this.http.post<Employee>(environment.urlBackend+ '/employee/addEmployee', employee).subscribe(res =>
      {
          this.response = res;
          this.onNoClick();
         }, error => {
           console.log(error.status);
         }
      ));
  }

  ngOnDestroy(): void {
this.subSink.unsubscribe();
  }
}
