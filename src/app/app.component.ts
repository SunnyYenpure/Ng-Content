import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipost } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showmodal: boolean = false;
  title = 'Ng-Content';
  postArr: Array<Ipost> = [];
  photosarr = [];

  POST_URL: string = 'https://jsonplaceholder.typicode.com/posts';
  PHOTOS_URL: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private _httpclient: HttpClient) {}

  ngOnInit(): void {
    this._httpclient.get(this.POST_URL).subscribe((res: any) => {
      console.log(res);
      this.postArr = res;
      this._httpclient.get(this.PHOTOS_URL);
    });
  }
  onEdit(id: number) {
    console.log(id);
  }
  onpostremove() {
    this.showmodal = true;
  }
  getshowflag(flag: boolean) {
    this.showmodal = flag;
  }
  getconfirmation(flag: boolean) {
    if (flag) {
      console.log('Make Remove API Call..');
    } else {
      console.log('Dont Make Remove API Call..');
    }
  }
}
