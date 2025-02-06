//Use ESM
import greet from './greet.js';

//use alias greet2 for the greet variable name, to avoid colliding.
import { greet as greet2 }  from './greet2.js';

//now file extension is mjs
import greeting  from './greet3.mjs';

greet();
greet2();
greeting();
