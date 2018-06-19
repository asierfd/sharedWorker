var ws = null
var url = "ws://merchant.qless.com:8000"
self.addEventListener("connect", function(e) {
	var port = e.ports[0]
	port.addEventListener("message", function(e) {
		if (e.data === "start") {
			if (ws === null) {
				console.log('entro en el ws');
				port.postMessage('Hola mundo!');
				ws = new WebSocket(url);
				port.postMessage("started connection to " + url);
				ws.onopen = () => {
					const cookie1 = "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";
					const cookie2 = "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";
					const cookie3 = "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";
					const cookie4 = "Jlf2/GWE3jdRD98Ax87zxGtMJnAUZ6JWOWkyBC";
					ws.send('Module: EmployeeEventModule');
					ws.send('AU: ' + cookie1 + cookie2 + cookie3 + cookie4);
					ws.send('PAGE: 129783608561230561050795617056');
				};
				ws.onmessage = e => {
					port.postMessage('data: ' + e.data)
				};
			} else {
				port.postMessage("reusing connection to " + url);
			}
		}
	}, false);
	port.start();
}, false);
