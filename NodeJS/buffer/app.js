//Create a buffer object instance and give it a string value with encoding
const buf = new Buffer('Hello', 'utf-8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
//write data to buffer
buf.write('wo');
console.log(buf.toString());