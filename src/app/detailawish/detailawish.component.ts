import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

import {Router} from '@angular/router';

@Component({
  selector: 'app-detailawish',
  templateUrl: './detailawish.component.html',
  styleUrls: ['./detailawish.component.css']
})
export class DetailawishComponent implements OnInit {

  id:any
  id1:any
  userkey:any

  itemList:AngularFireList<any>
  itemLista:AngularFireList<any>

  itemArray = []
  itemArray1 = []

  data = {
    name:'',
    describe:'',
    image:'',
    // email:''
    uid:''
  }

  data1 = {
    name:'',
    age:'',
    address:'',
    province:'',
    email:'',
    image :''
  }


  constructor(public route:ActivatedRoute,public db:AngularFireDatabase,public router:Router,public dba:AngularFireDatabase) {

    this.route.params.subscribe(params=>{
      this.id = params
    })

    this.itemList = db.list('awishs')

    this.itemLista = dba.list('users')


    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y =action.payload.toJSON()
        y['$key'] = action.key
        if (action.key == this.id['id']){
          this.itemArray.push(y as ListItemClass)


          this.data.name = this.itemArray[0]['name']
        
          this.data.describe = this.itemArray[0]['describe']
          this.data.image = this.itemArray[0]['image']

          this.data.uid = this.itemArray[0]['uid']

          // this.data.email = this.itemArray[0]['email']

          
          this.id1= this.data.uid
          console.log(this.id1)

        }



      })
    })

    this.itemLista.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y =action.payload.toJSON()
        y['$key'] = action.key
        if (action.payload.child('uid').val() == this.id1){
          this.itemArray1.push(y as ListItemClass1)

          this.userkey = action.key

          this.data1.name = this.itemArray1[0]['name']
          this.data1.age = this.itemArray1[0]['age']
        
       

          console.log('---------')
          console.log(action.payload.child('name').val())
          console.log(this.data1.age)
          console.log(this.userkey)

        }



      })
    })





    console.log(this.itemArray)


   }

  ngOnInit() {

    
  }


  Back(){

    this.router.navigate(['allawishs']) 
  }

}
export class ListItemClass{
  $key : string;
  name : string;
  describe : string;
  image : string;
  // email:string;
  uid:string;
  

}

export class ListItemClass1{
  $key : string;
  name : string;
  age :string;
  phone : string;
  address : string;
  province:string;

  email :string;

}
