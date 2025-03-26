
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * 1.07;
}


const fromDollarToYen = (dollar) => {
    return dollar * 156.5;
};
const fromYenToPound = (yen) => {
    return yen * 0.87;
}

module.exports = { fromEuroToDollar, fromDollarToYen, sum,  fromYenToPound  };