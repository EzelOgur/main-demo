import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wiz-comp',
  templateUrl: './wiz-comp.component.html',
  styleUrls: ['./wiz-comp.component.scss']
})
export class WizCompComponent implements OnInit {

  isLinear = true;
  formNameGroup : FormGroup;
  formPasswordGroup : FormGroup;
  formPhoneGroup : FormGroup;
  constructor(private fb: FormBuilder,private router:Router) { this.createForm(); }
  createForm() {
  this.formNameGroup  = this.fb.group({
    userName: ['', Validators.required]
  });

  this.formPasswordGroup  = this.fb.group({
    passWord: ['', Validators.required]
  });

  this.formPhoneGroup  = this.fb.group({
    mobile: ['', Validators.compose([Validators.required, Validators.min(10)])]
  });
  }
  ngOnInit(): void {
  }

  ridirect(){

    this.router.navigate(["facebook"])
  }

}
