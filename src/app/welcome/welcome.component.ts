import { Component } from '@angular/core';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  title = 'AngularQuiz';
  data:Array<any>;
  constructor(private JSONPlaceholder: JSONPlaceholderService ,  private router: Router){
    this.data=new Array<any>();
    this.getDataAPI();
  }
gotoDetails(id:number){
  //[routerLink]="['/details',image.id]"
  this.router.navigate(['/details/'+id])
}
  getDataAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      this.data=data;
    });
  }

  deleteData(id: number){
    this.JSONPlaceholder.deleteData(id).subscribe(()=>{
      console.log('Deleted');
    });
  }

}
