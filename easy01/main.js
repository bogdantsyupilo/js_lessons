const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector.split('');
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

const divElement = new DomElement('.block', 128, 128, '#F0DB4E', 32);
const parElement = new DomElement('#text', 64, 64, '#323230', 16);

DomElement.prototype.createElement = function(){
    for(let i = 0; i < this.selector.length; i ++){
        if(this.selector[i] === '.'){
            let div = document.createElement('div');

            div.style.height = this.height + 'px';
            div.style.width = this.width + 'px';
            div.style.backgroundColor = this.bg;
            div.style.fontSize = this.fontSize + 'px';
            div.innerHTML = '<b>"div"</b> Element';
            div.classList.add(this.selector.join(''));

            document.body.append(div);
        } else if(this.selector[i] === '#'){
            let p = document.createElement('p');

            p.style.height = this.height + 'px';
            p.style.width = this.width + 'px';
            p.style.backgroundColor = this.bg;
            p.style.fontSize = this.fontSize + 'px';
            p.innerHTML = '<b>"p"</b> element';
            p.id = this.selector.join('');

            document.body.append(p);
        }
    }
};

divElement.createElement();
parElement.createElement();
