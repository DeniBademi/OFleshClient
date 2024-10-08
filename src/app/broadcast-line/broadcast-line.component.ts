import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-broadcast-line',
  templateUrl: './broadcast-line.component.html',
  styleUrls: ['./broadcast-line.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BroadcastLineComponent implements OnInit {

  // @ViewChild(CountdownTimerComponent) countdown:CountdownTimerComponent;
  @ViewChild('body') body: ElementRef;

  text: string = "Limited-time discount:";
  constructor() { }

  ngOnInit() {

    if(localStorage.getItem('targetTime')== null) {
      document.getElementById("background").style.backgroundColor = "/* #CCC;  site-background */";
      document.getElementById("content").style.color = "/* #CCC;  site-background */";
      this.text = ""
    }
  }


  startTimer() {
    // document.getElementById("background").style.display = "block";
    // document.getElementById("background").style.backgroundColor = "black";
    // document.getElementById("background").style.display = "flex";
    // document.getElementById("background").style.justifyContent = "center";
    // document.getElementById("content").style.color = "red";
    // document.getElementById("content").style.textAlign = "middle";
    // this.text = "Limited-time discount:";
  }

}
