import ReactDOM from 'react-dom';
import App from './App';

// The following renders App.js contents into the div-element defined in 
// public/index.html, having the id value 'root':
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// By default, the file public/index.html doesn't contain any HTML markup 
// that is visible to us in the browser. You can try adding some HTML into
// the file. However, when using React, all content that needs to be
// rendered is usually defined as React components.
