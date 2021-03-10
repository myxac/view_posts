import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  postsList : any;
  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getPostsList();
  }

  getPostsList(): void {
    this.dataService.getAllPosts().subscribe(res =>{
      console.log(res);
      this.postsList = res;
    })
  }
}
