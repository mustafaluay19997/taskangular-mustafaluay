import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs';

import {Router} from '@angular/router';

@Component({
  selector: 'app-awish',
  templateUrl: './awish.component.html',
  styleUrls: ['./awish.component.css']
})
export class AwishComponent implements OnInit {


  itemList:AngularFireList<any>

  ref:AngularFireStorageReference
  task:AngularFireUploadTask

  downloadURL :Observable<string>
  imageURL:string



  data = {
    name:'',
    describe:'',
    image:'',
    status:false
  }

  email:string = '';
  uid:any;

  constructor(public db:AngularFireDatabase,private afStorage:AngularFireStorage,public router:Router,private fire:AngularFireAuth) {
    this.itemList = db.list('awishs')
   }

  ngOnInit() {

    let user = localStorage.getItem('email')
    this.email = user
    // console.log(user)
    
    console.log('---------------------')

    this.uid =localStorage.getItem('uid')

    console.log(this.email)
    console.log('uid : '+ this.uid)
  }

  insertNews(){
    this.itemList.push({
    name: this.data.name,
    describe:this.data.describe,
    image : this.imageURL,
    email:this.email,
    uid:this.uid,
    status:this.data.status
    })
    this.router.navigate(['/allawishs']) // move to myskill page
  }


  
  upload(event){
    var ref = this.afStorage.ref("images/" + event.target.files[0].name);

    var put = ref.put(event.target.files[0]);
  
    put.then(ok => {
      ref.getDownloadURL().subscribe(url => {
        this.imageURL = url
        console.log(this.imageURL)
  

   });
  
  })
  }

}
