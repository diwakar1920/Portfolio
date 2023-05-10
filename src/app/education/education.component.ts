import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Lamar University',
      course: 'M.S in Computer Science',
      duration: '1993-1995',
      score: '75%',
    },
    {
      institute: 'Qis College',
      course: 'BTech in Electronics & Communication Engineering',
      duration: '1989-1993',
      score: '85%',
    },
    {
      institute: 'Narayana College',
      course: 'HSC',
      duration: '1988-1989',
      score: '80%',
    },
    {
      institute: 'Sarada English Medium School',
      course: 'SSC',
      duration: '1986-1988',
      score: '90%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
