const Commander = (() => {
	const o = {
		comprar: (x) => {
			console.log(`Comprando ${x}`);
		},
		vender: (x) => {
			console.log(`Vendiendo ${x}`);
		}
	};

	return {
		run: (comando, argumentos) => {
			if (!o[comando]) return console.log("Comando inexistente");
			o[comando](argumentos);
		}
	};
})();

Commander.run('comprar', 'bicicleta');
Commander.run('alquilar', 'bicicleta');
