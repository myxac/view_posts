import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  postsList: any = [];
  topPosts: any = [];
  loading: boolean = false;
  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getPostsList();
  }

  getPostsList(): void {
    this.loading = true;
    let path = 'posts';
    this.dataService.getData(path).subscribe(result =>{
      this.postsList = result;
      this.topPosts = this.dataService.addImg(this.postsList.splice(0,2));
      this.loading = false;
    },err =>{
      this.loading = false;
    })
  }
}
