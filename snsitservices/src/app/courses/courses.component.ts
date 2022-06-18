import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  template: '<router-outlet></router-outlet>'
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
