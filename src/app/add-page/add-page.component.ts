import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  titleString: string;
  descString: string;

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    console.log('cancel');
  }

  save() {
    console.log('save');
  }
}
