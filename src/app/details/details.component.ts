import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit , OnDestroy{
  id: number;
  albumID: number;
  title:String;
  url: String;
  thumbnailUrl: String;
  item: any;
  subscribe: Subscription;
  constructor(private JSONPlaceholder: JSONPlaceholderService, private route: ActivatedRoute) {
    console.log('Details Constructor '+this.id);
   }
  ngOnDestroy(): void {
    if (this.subscribe){      
      this.subscribe.unsubscribe();
      this.subscribe=null;
    }
  }

   ngOnInit(){
     this.id=+this.route.snapshot.paramMap.get('id');
    console.log('Details Init '+this.id);
    this.subscribe=this.JSONPlaceholder.getItem(this.id).subscribe((x)=>{
      this.item=x
      this.albumID=x.albumId
      this.title=x.title
      this.url=x.url
      this.thumbnailUrl=x.thumbnailUrl
      console.log('Get Item')
    })
   }

}
