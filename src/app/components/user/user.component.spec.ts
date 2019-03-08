import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input()
  user: User;
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {}
  public openModal(template) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
