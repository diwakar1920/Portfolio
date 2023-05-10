import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Diwakar Bhavanam'],
    ['DOB', '03/19/1997'],
    ['Work Exp', '5 Years'],
    ['Education', 'M.S (2021)'],
    ['Interests', 'Cricket, Carroms, Badminton'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 5 years of experience in software industry.',
    'Worked as Full stack Developer in Mouritech for various technologies (C#, .Net, Docker, .Net Core, Angular, React).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, in a Job search',
  ];

  constructor() {}

  ngOnInit(): void {}
}
