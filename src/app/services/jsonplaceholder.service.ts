import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {
   url= "http://jsonplaceholder.typicode.com/photos";
  constructor(private http: HttpClient) {

   }

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(this.url+'/'+id);
  }

  deleteData(id: number): Observable<any>{
      return this.http.delete(this.url+'/'+id);
  }

  addData(albumId:number, title: String, url: String, thumbnailUrl: String): Observable<any>{
      let newData=
        {
          "albumId": albumId,
          "title": title,
          "url": url,
          "thumbnailUrl": thumbnailUrl
        };
        return this.http.post(this.url,newData);
  }

  editData(albumId:number, id: number,title: String, url: String, thumbnailUrl: String): Observable<any>{
    let newData=
        {
          "albumId": albumId,
          "id": id,
          "title": title,
          "url": url,
          "thumbnailUrl": thumbnailUrl
        };
        return this.http.put(url+'/'+id,newData);
  }
}
