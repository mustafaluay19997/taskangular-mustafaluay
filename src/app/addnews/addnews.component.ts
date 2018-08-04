import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';
// import { auth } from 'firebase';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {


  itemList:AngularFireList<any>

  ref:AngularFireStorageReference
  task:AngularFireUploadTask

  downloadURL :Observable<string>
  imageURL:string


  data = {
    title:'',
    source:'',
    describe:'',
    image:''
  }


  email:string = '';
  uid:any;



  constructor(public db:AngularFireDatabase,private afStorage:AngularFireStorage,public router:Router,private fire:AngularFireAuth) { 
    this.itemList = db.list('news')
    
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
      title: this.data.title,
    source: this.data.source,
    describe:this.data.describe,
    image : this.imageURL,
    email:this.email,
    uid:this.uid
    })
    this.router.navigate(['/allnews']) // move to myskill page
  }


  upload(event){

    //    const id = Math.random().toString(36).substring(2);
    //  this.ref = this.afStorage.ref(id);
    //  this.task = this.ref.put(event.target.files[0]);
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
