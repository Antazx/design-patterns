const https = require("https");

const get = (url) =>
	new Promise((resolve, reject) => {
		const comp = url.split("/");
		const host = comp.shift();
		const options = {
			hostname: host,
			path: `/${comp.join("/")}`,
			method: "GET"
		};

		const req = https.request(options, (res) => {
			res.setEncoding("utf-8");
			let body = "";

			res.on("data", (data) => {
				body += data;
			});

			res.on("end", (data) => {
				const parsed = JSON.parse(body);
				/* console.log(parsed); */
				resolve(parsed);
			});
		});

		req.on("error", (error) => {
			console.error(error);
			reject(error);
		});

		req.end();
	});

const main = async () => {
	const resultado = await get("jsonplaceholder.typicode.com/users");
	console.log("Resultado recibido: ", resultado);
};

main();
