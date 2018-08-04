import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  email:string=''
  myid:string=''
  uid:any;

  itemList:AngularFireList<any>

  itemArray = []

  ref:AngularFireStorageReference
  task:AngularFireUploadTask

  downloadURL :Observable<string>
  imageURL:string


  userKey:string

  data = {
    name:'',
    age:'',
    address:'',
    province:'',
    email:'',
    image :'',
    cure:'',
    password:'',
    userstatus:0
  }
  constructor(private afStorage:AngularFireStorage,public db:AngularFireDatabase) {
    this.itemList = db.list('users')
    this.email = localStorage.getItem('email');
    this.myid = localStorage.getItem('uid');


    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y =action.payload.toJSON()
        y['$key'] = action.key
        this.itemArray.push(y as ListItemClass)

        if (action.payload.child('uid').val() == this.myid){
          this.itemArray.push(y as ListItemClass)
          this.userKey = action.key
          // this.data.name = this.itemArray[0]['name']
          // this.data.age = this.itemArray[0]['age']
          // this.data.address = this.itemArray[0]['address']
          // this.data.province = this.itemArray[0]['province']
          // this.data.email = this.itemArray[0]['email']
          // this.data.image = this.itemArray[0]['image']
          this.data.name = action.payload.child('name').val()
          this.data.age = action.payload.child('age').val()
          this.data.address = action.payload.child('address').val()
          this.data.province = action.payload.child('province').val()
          this.data.email = action.payload.child('email').val()
          this.data.image = action.payload.child('image').val()
          this.data.cure = action.payload.child('cure').val()
          this.data.password = action.payload.child('password').val()
          this.data.userstatus =parseInt( action.payload.child('userstatus').val())
          // this.data=this.itemArray[0]
          console.log(this.userKey)
          console.log(this.data)
         
        }

      })
    })

    
    
  


   }


  ngOnInit() {
    
      
    console.log(this.myid)
    console.log(this.email)


  }

  onEdit(){

    if (this.imageURL == null)
    {
      this.imageURL = this.data.image
   
    }
  

      this.itemList.set(this.userKey,{
    
        name: this.data.name,
        age: this.data.age,
        address: this.data.address,
        province: this.data.province,
        email:this.email,
        image:this.imageURL,
        uid:this.myid,
        cure:this.data.cure,
        userstatus:this.data.userstatus,
        password: this.data.password
  
      })

     

    

 

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

export class ListItemClass{
  $key : string;
  name : string;
  age :string;
  phone : string;
  address : string;
  province:string;
  cure:string;
  password:string;
  email :string;
  userstatus:Number;

}

/*

   name: this.fullname,
        email:this.email,
        password:this.password,
        image:' ',
        address : ' ',
        province: '',
        age : ' ',
        cure : ' '


*/
