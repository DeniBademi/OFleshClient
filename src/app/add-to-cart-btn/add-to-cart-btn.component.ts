import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.scss']
})
export class AddToCartBtnComponent implements OnInit {


  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
  }

}
