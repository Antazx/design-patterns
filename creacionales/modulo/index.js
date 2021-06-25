const modulo = {
    propiedad: "mi propiedad",
    config: {
        lenguaje: "es",
        cache: true
    },
    setConfig: (config) => {
        modulo.config = config;
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? true : false);
    }
};

