import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';

import { Observable } from 'rxjs';

import {Router} from '@angular/router';

@Component({
  selector: 'app-contactpost',
  templateUrl: './contactpost.component.html',
  styleUrls: ['./contactpost.component.css']
})
export class ContactpostComponent implements OnInit {


  itemList:AngularFireList<any>

  ref:AngularFireStorageReference
  task:AngularFireUploadTask

  downloadURL :Observable<string>
  imageURL:string



  data = {
    title:'',
    describe:'',
    image:''
  }
  constructor(public db:AngularFireDatabase,private afStorage:AngularFireStorage,public router:Router) {
    this.itemList = db.list('posts')
   }

  ngOnInit() {
  }

  insertNews(){
    this.itemList.push({
      title: this.data.title,
    describe:this.data.describe,
    image : this.imageURL
    })
    this.router.navigate(['/allcontactpost']) // move to myskill page
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

