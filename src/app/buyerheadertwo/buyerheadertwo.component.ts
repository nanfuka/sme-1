import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyerheadertwo',
  templateUrl: './buyerheadertwo.component.html',
  styleUrls: ['./buyerheadertwo.component.css']
})
export class BuyerheadertwoComponent implements OnInit {
  links = ['Account Settings', 'orders', 'invoices', 'invite-contacts', 'Vault', 'payment notice'];

  constructor() { }

  ngOnInit() {
  }

}
