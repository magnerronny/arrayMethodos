console.log(`el methodo array push`);
const number = [];
number.push(1);
number.push(2);
number.push(3);
console.log(number);

const nombres = [];
nombres.push('juan','thiago');
nombres.push('Magner');
nombres.push(
    {
        nombre:'leon',
        edad:23,
        soltero:true
    }
)
nombres.push('Ronny');
console.log(nombres);
console.log(`su nombre es ${nombres[3].nombre}, tiene la edad de ${nombres[3].edad},
su estado sentimental es ${nombres.soltero}`);
