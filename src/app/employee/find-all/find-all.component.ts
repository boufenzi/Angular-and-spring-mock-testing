import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployees();
  }

public getEmployees() {
   this.employeeService.getEmployees().subscribe((res: Employee[]) => this.employees = res);
}


openDialog(): void {
  const dialogRef = this.dialog.open(AddComponent, {
    width:"500px",
    data: {},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();

  });
}



}
