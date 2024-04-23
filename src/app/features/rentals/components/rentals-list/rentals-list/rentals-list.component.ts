import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RentalListItemDto } from '../../../models/rental-list-item-dto';
import { RentalsApiService } from '../../../services/rentalsApi.service';
import { NavbarComponent } from '../../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-rentals-list',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './rentals-list.component.html',
  styleUrl: './rentals-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalsListComponent implements OnInit {
  @Output() selectRental = new EventEmitter<number | null>();

  list: Array<RentalListItemDto> = [];

  constructor(
    private rentalsService: RentalsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.rentalsService.getList().subscribe((rentals) => {
      this.list = rentals;
      this.change.markForCheck();
    });
  }
}
