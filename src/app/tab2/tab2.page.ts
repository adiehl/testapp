import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private barcodeScanner: BarcodeScanner) {}

  qrscanner() {

    this.barcodeScanner.scan().then((data) => {
      alert(data);
    }).catch(err => {
      alert(err.toString());
    });
  }
}
