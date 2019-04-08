require('./lib'); // if getting an unresolved error, go to "Preferences/Languages and Frameworks/Node.js and NPM" and click the "Coding assistance for Node.js"
// if running webpack script next, will need to install webpack cli--you will likely be prompted during bundling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/site.css';
import ES6Lib from './ES6Lib';

document.getElementById("vanillaJs").innerHTML = getText();

$('#jqueryFill').html('I done filled this with Query!');

let myES6Creature = new ES6Lib();
$('#es6Fill').html(myES6Creature.getData());