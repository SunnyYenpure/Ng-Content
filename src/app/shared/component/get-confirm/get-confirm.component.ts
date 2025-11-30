import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
// closemodal() {
// throw new Error('Method not implemented.');
// }
@Input() show:boolean=false
@Output() emitshowflag:EventEmitter<boolean>=new EventEmitter<boolean>()
@Output() removeapiflag:EventEmitter<boolean>=new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  closemodal(removeapiflag:boolean){
    this.show=false
    this.emitshowflag.emit(false)
    this.removeapiflag.emit(removeapiflag)
  }
}
