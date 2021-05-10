import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  vidUrl:SafeResourceUrl;
  constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.vidUrl =
    this.domSatizer.bypassSecurityTrustResourceUrl("https://fcttax.com/mobile-schedule/");
  }

}
