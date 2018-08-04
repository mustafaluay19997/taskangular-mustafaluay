import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';

import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string = ""
  password:string = ""

  fullname:string=''

  itemList:AngularFireList<any>


  uid:any;

  constructor(private fire:AngularFireAuth,private router:Router,public db:AngularFireDatabase) { 
    this.itemList = db.list('users')
  }

  ngOnInit() {
  }

  myRegister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then(user =>{
      console.log(this.email+"  "+this.password);

      this.uid = this.fire.auth.currentUser.uid


      this.itemList.push({
        name: this.fullname,
        email:this.email,
        password:this.password,
        image:'',
        address : '',
        province: '',
        age : '',
        cure : '',
        uid : this.uid,
        userstatus:0
      })


      this.router.navigate(['login'])
    }).catch(error =>{
      console.log(error);
    })

  }

}
