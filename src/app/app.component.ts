import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {  // static false hole ei function ti call hobe.
    this.child.map(x=>console.log(x));
  }

  ngOnInit(): void {// static: true hole . ei function ti call hobe.
    console.log(this.calender);
  }
  loadCalender()
     {
      console.log(this.calender.nativeElement.value)
        this.input.nativeElement.value=this.calender.nativeElement.value;
     }

  @ViewChild('calender', { read: ElementRef, static: true }) calender!: ElementRef;// static by default false thake. 
    // static true mane user view render korar ager state and false mane user view render korar porer state.
    @ViewChild('input', { read: ElementRef, static: true }) input!: ElementRef;
    @ViewChildren(ChildComponent)child!:QueryList<ChildComponent>;
    add()
      {
       // this.child.increament();
      }
}
