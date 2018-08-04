import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

import {Router} from '@angular/router';

@Component({
  selector: 'app-allawishs',
  templateUrl: './allawishs.component.html',
  styleUrls: ['./allawishs.component.css']
})
export class AllawishsComponent implements OnInit {

  data = {
    name:'',
    describe:'',
    image:'',
    email:'',
    uid:'',
    status:null
  }

  itemList:AngularFireList<any>

  itemArray = []

  constructor(public db:AngularFireDatabase,public router:Router) {
    this.itemList = db.list('awishs')


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

  moreInfo(key){

    this.router.navigate(['detailswish/'+key]) 
    // console.log(key)

  }

  moreInfo1(key){

    this.router.navigate(['userinfo/'+key]) 
    // console.log(key)

  }

  showuid(status){

    console.log(status)
    // console.log(this.data.status)
  }

}

export class ListItemClass{
  $key : string;
  name : string;
  describe : string;
  image : string;
  email:string;
  uid:string;
  status:boolean;

}
