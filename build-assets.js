/* Logic Box Build Tools
 * build-assets.js
 * run with `node build-assets.js'
 * 
 * packages all assets into a base64-encoded JS file
 */
 
const fs = require('fs');

console.log('Building Assets...');

let output = 'window.logicBoxAssets = {';

fs.readdirSync('./src/assets').forEach(name => {
	console.log('Compiling ' + name);
	let file = fs.readFileSync('./src/assets/' + name);
	let base64 = file.toString('base64');
	output += '"' + name +'":"';
	output += base64;
	output += '",';
});

output += '}';

fs.writeFileSync('./build/assets.js', output);

console.log('Assets built to ./build/assets.js');
