import FetchData from "./components/dataComponent";

require('./lib'); // if getting an unresolved error, go to "Preferences/Languages and Frameworks/Node.js and NPM" and click the "Coding assistance for Node.js"
// if running webpack script next, will need to install webpack cli--you will likely be prompted during bundling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/allstyles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/basicComponent';

ReactDOM.render(
    <Counter />,
    document.getElementById('basicReactComponent')
);

ReactDOM.render(
    <FetchData/>,
    document.getElementById('reactComponentWithData')
);