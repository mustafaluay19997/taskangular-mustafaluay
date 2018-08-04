import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

import {Router} from '@angular/router'; 

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

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
    email:'',
    uid:'',
    status:null,
  }

  status1:boolean;

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

          this.data.email = this.itemArray[0]['email']
          this.data.status = this.itemArray[0]['status']

          if(this.data.status === true){
            this.status1 = false
          }
          else{
            this.status1 = true
          }

          
          this.id1= this.data.uid

         

          


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
          this.data1.address = this.itemArray1[0]['address']
          this.data1.province = this.itemArray1[0]['province']
          this.data1.email = this.itemArray1[0]['email']
          this.data1.image = this.itemArray1[0]['image']
        


          

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

  onEdit(){


    // console.log('----------------')
    // console.log(this.id['id'])
    // console.log(this.data)

    this.itemList.set(this.id['id'],{
    
      name: this.data.name,
      describe: this.data.describe,
      image: this.data.image,
      email:this.data.email,
      uid:this.data.uid,
      status:true

    })

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

export class ListItemClass1{
  $key : string;
  name : string;
  age :string;
  phone : string;
  address : string;
  province:string;
  email :string;

}

