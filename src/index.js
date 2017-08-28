import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style/index.css';
import App from './App';
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google : {
    families: ['Inconsolata', 'sans-serif']
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
