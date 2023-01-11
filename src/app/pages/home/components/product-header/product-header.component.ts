import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css'],
})
export class ProductHeaderComponent {
  @Output() columnsChange = new EventEmitter<number>();
  sort = 'desc';
  itemShowCount = 12;

  onSort(value: string): void {
    this.sort = value;
  }

  onItemsUpdated(count: number) {
    this.itemShowCount = count;
  }

  onColumnsUpdated(colNum: number) {
    this.columnsChange.emit(colNum);
  }
}
