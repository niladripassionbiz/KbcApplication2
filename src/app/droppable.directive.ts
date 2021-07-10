import { Directive , HostListener  } from '@angular/core';
import { SVGService } from './svg.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  private draggingElement: any;

  constructor(private svgService: SVGService) { }
  @HostListener('drop', ['$event'])

  onDrop(event) {
    console.log(event);
    const dropzone = event.target;
    console.log(dropzone);
    const droppedElementId = event.dataTransfer.getData('text');
    console.log(droppedElementId);
    const droppedElement = document.getElementById(droppedElementId) as any;
    console.log(droppedElement);

   

    dropzone.appendChild(droppedElement);

   droppedElement.setAttribute('draggable', true);

   /// const svgPoint = this.svgService.getSVGPoint(event, droppedElement);
    //this.setPosition(droppedElement, { x: svgPoint.x, y: svgPoint.y  });
    //console.log(event.target);
    const elementToBeDragged = droppedElement;
    event.dataTransfer.setData('id', elementToBeDragged);
    //const svgPoint = this.svgService.getSVGPoint(event, droppedElementId);
   // console.log(svgPoint);
    //this.setPosition(droppedElementId, { x: svgPoint.x, y: svgPoint.y  });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event): void {
    //console.log(event);
   
    if (this.draggingElement) {
      const svgPoint = this.svgService.getSVGPoint(event, this.draggingElement);
      console.log(svgPoint);
      this.setPosition(this.draggingElement, { x: svgPoint.x, y: svgPoint.y  });
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event): void {
    if (event.target.getAttribute('draggable')) {
      this.draggingElement = event.target;
    }
  }
  @HostListener('mouseup', ['$event'])
  onMouseUp(event): void {
    this.draggingElement = null;
  }
  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    this.draggingElement = null;
  }

  private setPosition(element, coord: { x, y }) {
    element.setAttribute('cx', coord.x);
    element.setAttribute('cy', coord.y);
  }

}
