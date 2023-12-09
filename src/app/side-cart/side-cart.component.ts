import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { DataService } from '../_services/data.service';

import { GlobalsService } from '../_services/globals.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.scss'],
})
export class SideCartComponent implements OnInit {

  couponCode: string;


  constructor(public CartService: CartService,
    public DataService: DataService,
    public translateService: TranslateService,
    public GlobalsService: GlobalsService,
    private toastr: ToastrService,
    public router: Router) { }

  ngOnInit() {
  }


  validateCouponCode() {

    if(this.couponCode == null || this.couponCode == '') return;
    if(this.couponCode.length < 5) return;
    if(this.CartService.cartItemsCount.value == 0) return;

    console.log(this.couponCode);
    this.DataService.validateCouponCode(this.couponCode).subscribe(
      (data) => {
        this.CartService.couponCode = this.couponCode;
        this.CartService.couponData = data.body;
        this.CartService.calculateTotal();
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.toastr.error(this.translateService.instant('Invalid coupon code'));
      }
    );

  }


}