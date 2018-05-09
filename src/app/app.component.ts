import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FakeApiService} from './services/fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dataList: Array<any>;
  tableList: Array<any> = [''];
  @ViewChild('dataTable') dataTable;
  constructor(private backend: FakeApiService) {
    this.tableList = [''];
  }

  columnDefs = [
    {headerName: 'Id', field: 'id', width: 0},
    {headerName: 'Name', field: 'name', width: 0},
    {headerName: 'Auctions', field: 'auctions', width: 0},
    {headerName: 'Requests', field: 'requests', width: 0},
    {headerName: 'Bids', field: 'bids', width: 0},
    {headerName: 'Views', field: 'views', width: 0},
    {headerName: 'Clicks', field: 'clicks', width: 0},
    {headerName: 'CTR', field: 'CTR', width: 0},
    {headerName: 'CPC', field: 'CPC', width: 0},
    {headerName: '', field: '', width: 1}
  ];

  ngOnInit() {
    this.backend.getAll().subscribe((response: Array<any>) => {
      this.dataList = response;
      this.setColWidth();
      console.log(this.dataList);
    });

  }

  setColWidth() {
    const tableWidth = document.getElementById('dataTable').offsetWidth;
    let totalWidth = 0;
    this.columnDefs.forEach(colItem => {
      colItem.width === 0 ? colItem.width = colItem.headerName.length * 12 : colItem.width = tableWidth - totalWidth;
      totalWidth += colItem.width < 75 ? colItem.width = 75 : colItem.width;
    });
    this.dataTable.api.setColumnDefs(this.columnDefs);
  }
}
