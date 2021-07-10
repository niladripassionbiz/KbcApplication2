import { Directive ,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragabble]'
})
export class DragabbleDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute('draggable', true);
   }
   @HostListener('dragstart', ['$event'])
   onDragStart(event) {
     console.log(event);
    const elementToBeDragged = event.target.id;
    console.log(elementToBeDragged);
    event.dataTransfer.setData('text', elementToBeDragged);
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event) {
      event.preventDefault();
  }
}
