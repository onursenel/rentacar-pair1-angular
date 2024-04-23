import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerListItemDto } from '../../models/customer-list-item-dto';
import { CustomersApiService } from '../../services/customersApi.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CustomersListComponent implements OnInit {
  @Output() selectBrand = new EventEmitter<number | null>();

  list: Array<CustomerListItemDto> = [];

  constructor(
    private brandsService: CustomersApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.brandsService.getList().subscribe((brands) => {
      this.list = brands;
      this.change.markForCheck();
    });
  }
}
