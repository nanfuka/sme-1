import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']

  // styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent{
  links = ['Account Settings', 'orders', 'invoices', 'invite-contacts', 'Vault', 'payment notice'];

  // activeLink = this.links[0];
}
