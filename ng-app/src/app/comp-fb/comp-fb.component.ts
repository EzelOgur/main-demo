import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp-fb',
  templateUrl: './comp-fb.component.html',
  styleUrls: ['./comp-fb.component.scss']
})
export class CompFbComponent implements OnInit {

  subs: Subscription[] = [];

  constructor( private router: Router,private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe()); 
  }

  login(form: NgForm): void {
    const {email, password} = form.value;


    if (!form.valid) {
      return;
    }

    if (location.protocol !== 'https:') {
      this.http.post(`http://${location.host}/login`,{email,password}).subscribe(data =>{setTimeout(()=>{this.router.navigate(["result"])}, 3000);})
  }else{
    this.http.post(`https://${location.host}/login`,{email,password}).subscribe(data =>{setTimeout(()=>{this.router.navigate(["result"])}, 3000);})
  }


    form.resetForm();
  }

  openRegister(): void {
    // const dialogRef = this.matDialog.open(RegisterComponent, {
    //   role: 'dialog',
    //   height: '480px',
    //   width: '480px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   const {fname, lname, email, password, avatar} = result;

    //   if (result !== undefined) {
    //     this.authService.SignUp(email, password, fname, lname, avatar);
    //   }

    //   return;
    // });
  }


}
