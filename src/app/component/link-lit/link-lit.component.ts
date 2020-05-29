import { Component, OnInit } from '@angular/core';
import { LinkListService } from 'src/app/service/link-list.service';

@Component({
  selector: 'app-link-lit',
  templateUrl: './link-lit.component.html',
  styleUrls: ['./link-lit.component.scss'],
})
export class LinkLitComponent implements OnInit {

  constructor(
    public linklist:LinkListService
  ) { }

  ngOnInit() {
    console.log("this.linkList",this.linklist)

    this.linklist.append('abc')
    this.linklist.append('rt')
    console.log("this.linkList",this.linklist)
  }

}
