import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.scss',
})
export class ModalComponentComponent implements OnInit{
  @ViewChild('exampleModal') modalElement!: ElementRef;
  modalInstance: any;
  params: any;
  agInit(params: any) {
    this.params = params;
  }

  

  ngAfterViewInit(): void {
    this.modalInstance = new bootstrap.Modal(this.modalElement.nativeElement);
  }
  ngOnInit(): void {
    this.openModal
  }

  openModal() {
    this.modalInstance.show();
  }
}
