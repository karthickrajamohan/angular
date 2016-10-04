import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Photo } from './photo';

@Component({
    moduleId: module.id,
    selector: 'lightbox',
    templateUrl: 'lightbox.component.html'
})
export class LightboxComponent implements OnInit {
    @Input() photo: Photo[];
    @Output() onClose = new EventEmitter();
    @Input() selectedIndex: number;

    constructor() { }

    closed() {
        this.onClose.emit(true);
    }
    nextPhoto() {
        if (this.selectedIndex < (this.photo.length - 1)) {
            this.selectedIndex = this.selectedIndex + 1;
        }
        else {
            this.selectedIndex = 0;
        }
    }
    prevPhoto() {
        if(this.selectedIndex > 0 && (this.photo.length - 1)){
            this.selectedIndex = this.selectedIndex - 1;
        }
        else{
           this.selectedIndex = this.photo.length-1; 
        }
    }

    ngOnInit() { }
}