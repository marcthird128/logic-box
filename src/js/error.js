/* Logic Box
 * error.js
 * 
 * Contains error handling
 * code to notify the user
 * and generate a bug report,
 */

/* generate a bug report and stop the app */
function fatalError(error) {
	/* log the error for debugging */
	console.error(error);
	
	/* generate bug report */
	document.body.innerHTML += generateBugReport("A fatal error has occcurred", error);
}

/* generate a bug report html string */
function generateBugReport(message, error) {
	return 
	`<div class="gui-popup">
		<div class="gui-popup-bg"></div>
		<div class="gui-popup-window">
			<div class="gui-popup-header">
				<div class="gui-title-label">
					Bug Report
				</div>
			</div>
			<div class="gui-popup-content">
				<div class="gui-paragraph-label">
					${message}
				</div>
				<div class="gui-paragraph-label">
					Please submit a bug report
					with the following information:
				</div>
				<div class="gui-code">
					<pre>
						Logic Box Bug Report
						====================
						
						Stack Trace:
						${error.stack}
					</pre>
				</div>
			</div>
		</div>
	</div>
	`
}

export { fatalError };
