import React from 'react';
import ReactDOM, {render} from 'react-dom';
// import Deskmark from './deskmark.jsx'
import Container from './containers/index'

// require('../node_modules/bootstrap/dist/css/bootstrap-theme.css');
require('../build/index.scss');


var root = document.createElement('div');
root.className='wrapper';
document.body.appendChild(root);

render(<Container />, root);


