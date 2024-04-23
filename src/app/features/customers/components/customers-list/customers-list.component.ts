import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerListItemDto } from '../../models/customer-list-item-dto';
import { CustomersApiService } from '../../services/customersApi.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
    ],
})
export class CustomersListComponent implements OnInit {
  @Output() selectCustomer = new EventEmitter<number | null>();

  list: Array<CustomerListItemDto> = [];

  constructor(
    private customerService: CustomersApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.customerService.getList().subscribe((customers) => {
      this.list = customers;
      this.change.markForCheck();
    });
  }
}
