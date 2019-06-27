import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public title: string = 'Titel';
  public description: string = 'Beschreibung';

  constructor(private http: HttpClient) {
    this.http.get('https://cloud.bitquadrat.de/noname.php', {responseType: 'text'}).subscribe((data) => {
      const dates = data.match(/Treffen<\/h1>(.*)<\/div>/s);
      this.title = 'Chaotische Viertelstunden';
      this.description = dates.toString();
    });
  }
}
