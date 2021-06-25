const perro = {
    raza: 'Kilterrieer',
    ladrar: function(){
        console.log(`Guau guau! soy un ${this.raza}`);
    }
}

const lala = Object.create(perro);
console.log(lala); //Está vacío porque los objetos y propiedades están en el prototipo

lala.ladrar();
lala.raza = "Chihuahua";
lala.ladrar();