import _ from 'lodash';
import './style.css';

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['', ''], ' ');

  return element;
};

document.body.appendChild(component());