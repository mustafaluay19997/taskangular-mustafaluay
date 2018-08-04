import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

import {Router} from '@angular/router';

@Component({
  selector: 'app-allcontactpost',
  templateUrl: './allcontactpost.component.html',
  styleUrls: ['./allcontactpost.component.css']
})
export class AllcontactpostComponent implements OnInit {


  data = {
    title:'',
    describe:'',
    image:''
  }

  userstat:number=0;
  admin:boolean=false;

  itemList:AngularFireList<any>

  itemArray = []

  constructor(public db:AngularFireDatabase,public router:Router) {
    this.itemList = db.list('posts')




    this.userstat = parseInt(localStorage.getItem('userstatus'))
    if(this.userstat === 0){
      this.admin= false

    }else{
      this.admin= true
    }
    console.log( this.admin)

    


    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y =action.payload.toJSON()
        y['$key'] = action.key
        this.itemArray.push(y as ListItemClass)
      })
    })
    console.log(this.itemArray)

   }

  ngOnInit() {
  }

  go(){
    this.router.navigate(['contactpost']) 
  }

}

export class ListItemClass{
  $key : string;
  title : string;
  describe : string;
  image : string;

}

