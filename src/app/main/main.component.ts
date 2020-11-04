import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Coins, CoinsData } from '../interfaces/coins.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output()
  emitData = new EventEmitter();

  currentData: Array<CoinsData>;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  // tslint:disable-next-line: typedef
  getData() {
    this.apiService.getCoins().subscribe((response: Coins) => {
      this.currentData = response.data;
      console.log(this.currentData);

      this.emitData.emit(this.currentData[0].id);
    });
  }

}
