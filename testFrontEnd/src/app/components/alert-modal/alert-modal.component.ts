
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent {
  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() alertType: string | undefined;

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss('Close');
  }
}



