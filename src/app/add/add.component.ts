import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JSONPlaceholderService} from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {
  albumID: number;
  title:String;
  url: String;
  thumbnailUrl: String;
  item: any;
  subscribe: Subscription;
  constructor(private JSONPlaceholder: JSONPlaceholderService) {
    console.log('Add Constructor ');
   }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
   ngOnInit(){
    console.log('Add Init');
   }

  add(){
    console.log('add');
   this.subscribe=this.JSONPlaceholder.addData(this.albumID,this.title,this.url,this.thumbnailUrl).subscribe((x) => {
    console.log(x)
   });
  }
}
