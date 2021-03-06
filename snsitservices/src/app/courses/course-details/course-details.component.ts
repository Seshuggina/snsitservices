import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  id: string

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('name')
  }

}
