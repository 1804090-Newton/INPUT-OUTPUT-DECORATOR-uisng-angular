import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text!:string; //without initialing "!" this sign must be written.
 
  
  ischild:boolean=true;
  ngOnInit():void{// called after dom tree is created. it is used for initialing purphose.
    console.log("parrent oninit clalled");

  }
  
     constructor(){
      console.log('parent constructor called');
     
      
     }
     toggle()//After click operation in html file, toggle() are responsed and it set content of the ischild.
     {
      this.ischild=!this.ischild;
      
     }
}
