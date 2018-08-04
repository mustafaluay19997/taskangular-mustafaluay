import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

import {Router} from '@angular/router';

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {

  data = {
    title:'',
    source:'',
    describe:'',
    image:''
  }
  itemList:AngularFireList<any>

  userstat:number=0;
  admin:boolean=false;

  itemArray = []
  constructor(public db:AngularFireDatabase,public router:Router) {


    this.itemList = db.list('news')

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

  moreInfo(key){

    this.router.navigate(['detailsnews/'+key]) 
    // console.log(key)

  }
  go(){
    this.router.navigate(['addnews']) 
  }

}

export class ListItemClass{
  $key : string;
  title : string;
  source : string;
  describe : string;
  image : string;

}
