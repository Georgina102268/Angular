import { Component, OnDestroy, OnInit } from '@angular/core';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy{

  title = 'AngularQuiz';
  data:Array<any>;
  totalRecords: Number;
  page: Number = 1;
  subscribe: Subscription;
  constructor(private JSONPlaceholder: JSONPlaceholderService ,  private router: Router){
    this.data=new Array<any>();
    this.getDataAPI();
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
gotoDetails(id:number){
  //[routerLink]="['/details',image.id]"
  this.router.navigate(['/details/'+id])
}
  getDataAPI(){
    this.subscribe=this.JSONPlaceholder.getData().subscribe((data) => {
      console.log("aaaaaa:", data)
      this.data=data
      this.totalRecords = this.data.length
      console.log("totalRecords:", this.totalRecords)
    });
  }

  
  ngOnInit() {
    this.data = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.data = pageOfItems;
}

  deleteData(id: number){
    this.subscribe=this.JSONPlaceholder.deleteData(id).subscribe(()=>{
      console.log('Deleted');
    });
  }

}
