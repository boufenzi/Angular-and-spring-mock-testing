import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {  inject, TestBed } from '@angular/core/testing';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

describe('FindAllComponent', () => {
  let httpTestingController: HttpTestingController;
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EmployeeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  it('#getEmployees should use GET to retrieve data', () => {
    service.getEmployees().subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:8080/employee/getEmployees');

    expect(testRequest.request.method).toEqual('GET');
  });

  it('#getEmployees should return expected data', (done) => {
    const expectedData: Employee[] = [
      { id: 1, name: 'Abdel', email: 'a@gmail.com', jobTitle: 'engineer', phoneNumber: '0654215487', imageUrl: 'http://url.com', code: 'AA548789'},
    ];
    service.getEmployees().subscribe(data => {
        expect(data[0]).toEqual(expectedData[0]);
      done();
    });
    const testRequest = httpTestingController.expectOne('http://localhost:8080/employee/getEmployees');
    testRequest.flush(expectedData);
});

});
