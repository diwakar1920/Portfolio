import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Sr. Software Developer',
      company: 'Mouri Tech',
      duration: 'Aug 2015 - Now',
      description: [
        'Working to expand google in remote areas.',
        'Working to develop new technologies to make life easier.',
      ],
    },
    {
      role: 'Senior Software Developer',
      company: 'Mouri Tech',
      duration: 'Apr 2012 - Aug 2015',
      description: [
        'Involved in various Public talks',
        'Open Sourced Google VP8',
      ],
    },
    {
      role: 'Sr. Software Developer',
      company: 'Mouri Tech',
      duration: 'Jul 2008 - Mar 2012',
      description: [
        'Included Android in Google',
        'Worked on Development of Google Maps',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Mouri Tech',
      duration: 'Apr 2004 - Jun 2008',
      description: [
        'Worked on Google Toolbar',
        'Involved in team to develop Google Chrome',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Mouri Tech',
      duration: 'Sep 2002 - Mar 2004',
      description: [
        'Worked with multiple teams to develop desktop and web applications',
        'Worked on different technologies such as (Dotnet, C++, Java)',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
