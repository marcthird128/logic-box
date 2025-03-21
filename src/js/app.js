/* Logic Box
 * app.js
 * 
 * Main program
 * organization
 */
 
import { createHub } from './hub.js';

/* create the app */
function createApp(options) {
	/* central app hub */
	const hub = createHub();
	
	return new class {
		/* get the app's main hub */
		getHub() {
			return hub;
		}
	}
}
