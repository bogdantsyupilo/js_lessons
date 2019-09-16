const DomElement = function(height, width, bg){
    this.height = height;
    this.width = width;
    this.bg = bg;
};

const divElement = new DomElement(100, 100, '#F0DB4E');

DomElement.prototype.createElement = function(){
    let div = document.createElement('div');

    div.style.height = this.height + 'px';
    div.style.width = this.width + 'px';
    div.style.backgroundColor = this.bg;
    div.style.position = 'absolute';

    document.body.append(div);
};

document.addEventListener("DOMContentLoaded", function(event){
    divElement.createElement();

    let div = document.querySelector('div'),
        top = 0,
        left = 0;
    
    document.addEventListener('keydown', function(event){
        switch(event.keyCode){
            case 37:
                left -= 10;
                div.style.left = left + 'px';
                break;
            case 38:
                top -= 10;
                div.style.top = top + 'px';
                break;
            case 39:
                left += 10;
                div.style.left = left + 'px';
                break;
            case 40:
                top += 10;
                div.style.top = top + 'px';
                break;
        }
    });
});