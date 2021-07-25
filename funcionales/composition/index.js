const users = [
	{ edad: 27, nombre: "Guillermo", apellido: "Anta" },
	{ edad: 26, nombre: "Ivo", apellido: "Tron" },
	{ edad: 25, nombre: "Celia", apellido: "San" },
	{ edad: 24, nombre: "Juan", apellido: "Kun" }
];

/* const getYougestUser = (users) => {
	const sortedUsers = users.sort((a, b) => a.edad - b.edad);
	const youngestUser = sortedUsers[0];
	const youngest = {
		nombreCompleto: `${youngestUser.nombre} ${youngestUser.apellido}`,
		...youngestUser
	};
	return `${youngest.nombreCompleto} tiene ${youngest.edad} años`;
}; */

/* Como podemos escribir esto de una mejor manera */
const getFirstElement = (elements) => elements[0];
const formatUser = (user) => ({
	nombreCompleto: `${user.nombre} ${user.apellido}`,
	...user
});
const toCustomString = (user) => `${user.nombreCompleto} tiene ${user.edad} años`;
const sortByAge = (a, b) => a.edad - b.edad;
const sortList = (sortFunction) => (list) => list.sort(sortFunction);
const trace = x => y => {console.log(x, y); return y};
/* const getYougestUser = (users) => toCustomString(formatUser(getFirstElement(users.sort((a, b) => a.edad - b.edad)))); */

/* Genera un código más limpio pero más dificil de entender, cuando nosotros creamos todas estas funcionalidades (getFirstElement, formatUser, toCustomString) lo que estamos haciendo es desacoplar nuestro código para que sea lo más reutilizable posible, esto es lo que conocemos como composición de funciones*/

const compose =
	(...functionsToCompose) =>
	(data) =>
		functionsToCompose.reduce((composedFunctions, currentFunction) => currentFunction(composedFunctions), data);

const getYougestUser = compose(
    trace('Start'),
    sortList(sortByAge),
    trace('Lista ordenada'),
    getFirstElement,
    trace('Primer elemento'),
    formatUser,
    trace('Elemento formateado'),
    toCustomString,
);

console.log(getYougestUser(users));
