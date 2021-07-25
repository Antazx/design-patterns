/* const Emitter = (() => {
	const topics = {};
	const hasOwnProperty = topics.hasOwnProperty;

	return {
		on: (topic, listener) => {
			if (!hasOwnProperty.call(topics, topic)) topics[topic] = [];
			topics[topic].push(listener);
		},
		emit: (topic, info) => {
			if (!hasOwnProperty.call(topics, topic)) return;
			topics[topic].forEach((item) => item(info != undefined ? info : {}));
		}
	};
})();

Emitter.on('lala', x => console.log(x));
Emitter.emit('lala', {lala: 'emitido lolo'}); */

const Emitter = require("events");
const emitter = new Emitter();

emitter.on('lala', x => console.log(x));
emitter.emit('lala', {lala: 'lolo'});