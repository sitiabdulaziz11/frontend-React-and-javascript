//import { apikey } from './util.js';
//import  apikey  from './util.js';
//import { apikey, abc } from './util.js';
//console.log(apikey);
import * as anyname from './util.js'; //grouping as object
console.log(anyname); // or
console.log(anyname.abc);

// as also used as alias like this
import { apikey, abc as content } from './util.js';// to rename abc to content
console.log(content);