class Api {
    constructor() {
        this.operations = function(url, options, verb) {
            switch(verb) {
                case 'get':
                    //fetch ...
                case 'post':
                    //fetch ...
                default: 
                    return;
            }
        };
    }
}

class Api2 {
    constructor() {
        this.get = function (url, options) {
            //return axios.get ...
        };
        this.post = function (url, options) {
            //return axios.post ...
        };
    }
}

class ApiAdapter {
    constructor() {
        const api2 = new Api2();
        this.operations = function(url, options, verb) {
            switch(verb) {
                case 'get':
                    return api2.get(url, options);
                case 'post':
                    return api2.post(url, options);
                default: 
                    return;
            }
        }
    }
}

const oldApi = new Api();
oldApi.operations('www.google.es', {q: 1}, 'get');

const newApi = new Api2();
newApi.get('www.google.es', {q: 1});

const adapter = new ApiAdapter();
adapter.operations('www.google.es', {q: 1}, 'get');