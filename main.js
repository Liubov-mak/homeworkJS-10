'use strict';


function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;     
}

DomElement.prototype.createElem = function() {
    console.log("создаю элемент");
};    

let domElementNew = new DomElement();
domElementNew.createElem();

domElementNew.prototype = Object.create(DomElement); 
/* DomElementNew.prototype.constructor = DomElementNew; */
console.log(domElementNew.hasOwnProperty('width'));
/* console.log(DomElement.isPrototypeOf('DomElementNew')); */
