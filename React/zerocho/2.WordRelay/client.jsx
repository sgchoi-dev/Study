const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector("#root"));












/*import React from 'react';
import { render } from 'react-dom';

import WordRelay from './WordRelay';

render(<WordRelay />, document.querySelector("#root"));*/









/*import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import WordRelay from './WordRelay';
// import WordRelay from './WordRelay';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WordRelay />);*/