import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from 'src/app/posts';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public getJsonvalue: any;
  public postJsonvalue: any;
  public objPuts: Posts = new Posts();

  constructor(private http: HttpClient, private httpService: HttpService) {}

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();

    const opost = new Posts();
    opost.body = 'updating body';
    opost.title = 'updating title';
    opost.userId = 5;

    this.httpService.put(opost).subscribe((data) => {
      this.objPuts = data;
    });
  }

  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
      console.log(data);
      this.getJsonvalue = data;
    });
  }

  public postMethod() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let body = {
      title: 'taskmethods',
      body: 'beinex task day monday',
      userId: 1,
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', body, { headers: header }).subscribe((data) => {
      console.log(data);
      this.postJsonvalue = data;
    });
  }
}
