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
   }
   ngOnDestroy(): void {
    if (this.subscribe){      
      this.subscribe.unsubscribe();
      this.subscribe=null;
    }
  }
   ngOnInit(){
   }

  add(){
    if (this.subscribe){      
      this.subscribe.unsubscribe();
      this.subscribe=null;
    }
   this.subscribe=this.JSONPlaceholder.addData(this.albumID,this.title,this.url,this.thumbnailUrl).subscribe((x) => {
   });
  }
}
