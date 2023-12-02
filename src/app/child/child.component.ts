import { Component ,Input,OnChanges,OnDestroy,OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges, OnDestroy {
  interval:any;

  @Input() text!:string;//input properties for ngOnchanges
  count=0;
  ngOnInit(): void { // Dom generate korar por call hoi.
    console.log("child nginit called");
    this.interval=setInterval(()=>{
      this.count++;
      console.log(this.count)
    },1000);
  }




  constructor(){  // object oriented function constructor
    console.log('child constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {// for input properties. jodi input properties e kichu change hoi.
    //  tahole ngchanges function ti o call hobe.
    console.log (this.text);
  }
  ngOnDestroy(): void {   //Cleanup resources before the component is destroyed
      console.log('call child destroy');
      clearInterval(this.interval)
  }
  
  

}
