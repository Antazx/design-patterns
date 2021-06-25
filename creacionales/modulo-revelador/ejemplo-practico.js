const Users = (() => {
    const recurso = 'https://jsonplaceholder.typicode.com/users';
    //Aquí datos no accesibles, como endpoints o configs.
    return {
        listar: async () => {
            return await fetch(recurso).then(r => r.json());
        },
        crear: async (data) => {
            return await fetch(recurso, {type: 'POST', body: JSON.stringify(data)}).then(r => r.json());
        }
    }
})();