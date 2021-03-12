import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
// import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  loading: boolean = false;
  id: any;
  path : string;
  onePost: any =[];
  comments: any = [];
  constructor(
    public activatedRoute : ActivatedRoute,
    public dataService : DataService,
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.path = `posts/${this.id}`
  }

  ngOnInit(): void {
   this.getOnePost();
  }

  getOnePost(): void { 
    this.loading = true;
    this.dataService.getData(this.path).subscribe(result => {
      this.id == 1 || this.id == 2
      ? this.onePost = this.dataService.addImg(result, true)
      : this.onePost = result;
      console.log(this.onePost);
      this.getComments();
    })
  }
  getComments(): void {
    this.dataService.getData(`${this.path}/comments`).subscribe(result =>{
      console.log(result);
      this.comments = result;
      this.loading = false;
    },err =>{
      this.loading = false;
    })
  }
}
