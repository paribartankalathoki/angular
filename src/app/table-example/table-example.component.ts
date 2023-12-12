import { Component } from '@angular/core';

@Component({
  selector: 'kt-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {

  userDetails: any[] = [
    {
      name: 'Ram Karki',
      age: '20 years',
      address: 'Kathmandu, Nepal'
    },
    {
      name: 'Sita Karki',
      age: '25 years',
      address: 'Gorkha, Nepal'
    },
    {
      name: 'ABC Test Karki',
      age: '20 years',
      address: 'Kathmandu, Nepal'
    },
    {
      name: 'Radha Krishna',
      age: '25 years',
      address: 'Gorkha, Nepal'
    }
  ];

}
