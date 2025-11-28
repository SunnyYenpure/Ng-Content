import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipost } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ng-Content';
postArr:Array<Ipost>=[]
POST_URL:string='https://jsonplaceholder.typicode.com/posts'

constructor(private _httpclient: HttpClient){
       

}
ngOnInit(): void {
  this._httpclient.get(this.POST_URL)
  .subscribe((res:any)=>{
    console.log(res);
    this.postArr = res; 
  })
}
onEdit(id:number){
  console.log(id);
  
}
}
