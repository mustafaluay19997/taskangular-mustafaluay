import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database'; 
import {Router} from '@angular/router';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {
    name:'',
    age:'',
    address:'',
    province:'',
    email:'',
    image :'',
    userstatus:0
  }

  itemList:AngularFireList<any>
  itemArray = []

  myid:any


  email:string = ""
  password:string = ""

  constructor(private fire:AngularFireAuth,private router:Router,public db:AngularFireDatabase) {
    this.itemList = db.list('users')

 
  }

  ngOnInit() {
  }

  myLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(user =>{
      console.log(this.email+"  "+this.password);
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email', this.fire.auth.currentUser.email)



      this.myid = this.fire.auth.currentUser.uid

      this.itemList.snapshotChanges().subscribe(actions=>{
        actions.forEach(action=>{
          let y =action.payload.toJSON()
          y['$key'] = action.key
          this.itemArray.push(y as ListItemClass)
  
          if (action.payload.child('uid').val() == this.myid){
            this.itemArray.push(y as ListItemClass)
            
         
            this.data.name = action.payload.child('name').val()
            this.data.age = action.payload.child('age').val()
            this.data.address = action.payload.child('address').val()
            this.data.province = action.payload.child('province').val()
            this.data.email = action.payload.child('email').val()
            this.data.image = action.payload.child('image').val()
            this.data.userstatus = action.payload.child('userstatus').val()
      
            console.log(action.payload.child('userstatus').val())


            localStorage.setItem('userstatus', action.payload.child('userstatus').val())
           
          }
  
        })
      })











      this.fire.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('uid',auth.uid)
        }
        this.router.navigate(['/'])
      })

      
    }).catch(error =>{
      console.log(error);
      // alert('Email Or Password Is incorrect ):')
    })

  }

}


export class ListItemClass{
  $key : string;
  name : string;
  age :string;
  phone : string;
  address : string;
  province:string;

  email :string;
  userstatus:number;

}
