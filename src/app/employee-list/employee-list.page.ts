import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  creatBala3(){
    console.log('>>>>> creatBala3')
    this.router.navigate(['employee-location']);
  }

}
