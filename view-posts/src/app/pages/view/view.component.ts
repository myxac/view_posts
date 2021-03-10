import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  id: any;
  onePost =[];
  comments = [];
  constructor(
    public activatedRoute : ActivatedRoute,
    public dataService : DataService,
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
   this.getOnePost();
   this.getComments();
  }

  getOnePost(): void {
    this.dataService.getOnePost(this.id).subscribe(result => {
      console.log(result);
      this.onePost = result;
    })
  }
  getComments(): void {
    this.dataService.getPostComments(this.id).subscribe(result =>{
      console.log(result);
      // this.comments = result;
    })
  }
}
