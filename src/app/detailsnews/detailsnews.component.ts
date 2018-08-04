import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-detailsnews',
  templateUrl: './detailsnews.component.html',
  styleUrls: ['./detailsnews.component.css']
})
export class DetailsnewsComponent implements OnInit {
  id:any

  itemList:AngularFireList<any>

  itemArray = []

  data = {
    title:'',
    source:'',
    describe:'',
    image:'',
    email:''
  }


  constructor(public route:ActivatedRoute,public db:AngularFireDatabase) {

    this.route.params.subscribe(params=>{
      this.id = params
    })

    this.itemList = db.list('news')

    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y =action.payload.toJSON()
        y['$key'] = action.key
        if (action.key == this.id['id']){
          this.itemArray.push(y as ListItemClass)


          this.data.title = this.itemArray[0]['title']
          this.data.source = this.itemArray[0]['source']
          this.data.describe = this.itemArray[0]['describe']
          this.data.image = this.itemArray[0]['image']

          this.data.email = this.itemArray[0]['email']
       






        }
      })
    })


    console.log(this.itemArray)


   }

  ngOnInit() {
    console.log(this.id['id'])
    console.log(this.data)
  }

}
export class ListItemClass{
  $key : string;
  title : string;
  source : string;
  describe : string;
  image : string;
  email:string;
  

}