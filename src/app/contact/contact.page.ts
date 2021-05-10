import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactUrl:SafeResourceUrl;
  constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.contactUrl =
    this.domSatizer.bypassSecurityTrustResourceUrl("https://fcttax.com/mobile-contact-us/");
  }

}
