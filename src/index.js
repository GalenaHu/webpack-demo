import _ from 'lodash';
import './style.scss';
import Img from './1.jpg';
import './main.js'

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

function newImg() {
    let myImg = document.createElement('img');
    myImg.src = Img;

    return myImg
}

document.body.appendChild(component());
document.body.appendChild(newImg());