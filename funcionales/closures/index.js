const y = "lele";
const f = () => {
    const x = "lala";
    console.log(x);
    console.log(y);
};

//console.log(x); //ReferenceError: x is not defined
f();

const closure = (argument) => {
    return () => console.log(`Estos son los argumentos: ${argument}`);
}

closure('1, 2, 3, 4')();

const saved = closure('Los argumentos');
saved();