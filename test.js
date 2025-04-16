// Importar la función sum del archivo app.js

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
 test('One euro should be 1.07 dollars',function() {
    const dollars =fromEuroToDollar(1)
    const expected = 1 * 1.07;
     expect(fromEuroToDollar(1)).toBe(expected);
 });
 test('One dollar should be 156.5 yens', function(){
    expect(fromDollarToYen(1)).toBe(146.26168224299064);
 });
 test('One yen should be 0.87 Pounds', function() {
     expect(fromYenToPound(1)).toBeCloseTo(0.0055591054313099035);
 });