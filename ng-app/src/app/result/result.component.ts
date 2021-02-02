import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  displayedColumns: string[] = ['email', 'password'];
  dataSource = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    if (location.protocol !== 'https:') {

      this.http.get<any[]>(`http://${location.host}/login`).subscribe(data =>{this.dataSource = data})
  }else{

    this.http.get<any[]>(`https://${location.host}/login`).subscribe(data =>{this.dataSource = data})
  }


  }

}
