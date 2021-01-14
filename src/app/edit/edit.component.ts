import { Component, Input, OnInit } from '@angular/core';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id: number;
  albumID: number;
  title:String;
  url: String;
  thumbnailUrl: String;
  item: any;
  constructor(private JSONPlaceholder: JSONPlaceholderService, private route: ActivatedRoute) {
    console.log('Edit Constructor '+this.id);
   }
   ngOnInit(){
    console.log('Edit Init'+this.id);
    this.id=+this.route.snapshot.paramMap.get('id');
    this.JSONPlaceholder.getItem(this.id).subscribe((x)=>{
      this.item=x
      this.albumID=x.albumId
      this.title=x.title
      this.url=x.url
      this.thumbnailUrl=x.thumbnailUrl
      console.log('Get Item')
    })
   }

  update(){
    console.log('update');
    return this.JSONPlaceholder.editData(this.albumID,this.id,this.title,this.url,this.thumbnailUrl);
  }


}
