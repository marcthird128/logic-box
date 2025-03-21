/* Logic Box
 * hub.js
 * 
 * Contains the creatHub factory
 * to manage events and component
 * interactions
 */

import { fatalError } from './error.js';

/* create a hub */
function createHub() {
	/* registered componenets */
	const members = {};
	
	/* event listeners */
	const listeners = {};
	
	return new class {
		/* register a component */
		register(name, component) {
			/* make sure it's not already registered */
			if (members[name])
				fatalError(new Error("Attempt made to register components with the same name"));
			
			/* add component */
			members[name] = component;
		}
		
		/* send a component a message */
		send(name, message) {
			/* make sure it exists */
			if (!members[name]) {
				fatalError(new Error("No registered component found"));
			
			/* send the message and return result */
			return members[name].handle(message);
		}
		
		/* listen to event */
		listen(event, callback) {
			/* create event if nonexistenet */
			if (!listeners[event])
				listeners[event] = [];
			
			/* add the listener */
			listeners[event].push(callback);
		}
		
		/* dispatch an event */
		dispatch(event, data) {
			/* make sure there is at least 1 listener */
			if (!listeners[event])
				return;
			
			/* wait for current code to finish */
			setTimeout(() => listeners.forEach(l => 
				/* call each listener */
				l(data);
			), 0);
		}			
	}
}

export { createHub };
