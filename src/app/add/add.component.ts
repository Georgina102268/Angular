import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService} from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  albumID: number;
  title:String;
  url: String;
  thumbnailUrl: String;
  item: any;
  constructor(private JSONPlaceholder: JSONPlaceholderService) {
    console.log('Add Constructor ');
   }
   ngOnInit(){
    console.log('Add Init');
   }

  add(){
    console.log('add');
   this.JSONPlaceholder.addData(this.albumID,this.title,this.url,this.thumbnailUrl).subscribe((x) => {
    console.log(x)
   });
  }
}
