import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  info: any;
  currentData: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCoins().subscribe( (res) => {
      this.info = res;
      console.log('info', this.info)
      this.currentData = this.info.data
      console.log('currenData', this.currentData)

    })
  }


}
