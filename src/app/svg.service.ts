import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SVGService {

  constructor() { }

  getSVGPoint(event, element): SVGPoint {
    // get the mouse coordinates and set them to the SVG point
    const point = element.viewportElement.createSVGPoint();
    console.log(point);
    point.x = event.clientX;
    point.y = event.clientY;

    const CTM = element.viewportElement.getScreenCTM();
    const svgPoint = point.matrixTransform(CTM.inverse());

    return svgPoint;
  }
}
