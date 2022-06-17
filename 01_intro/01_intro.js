// function expect(val) {
//     return {
//         toBe: exp => {
//             if (val === exp) {
//                 console.log('success');
//             } else {
//                 console.error(`Value is ${val}, but expectation is ${exp}`);
//             }
//         }
//     }
// }

const sum = (a, b) => a + b;
const nativeNull = () => null;

module.exports = {sum, nativeNull}
// expect(sum(41, 1)).toBe(42) //success
// expect(sum(41, 1)).toBe(43) //Value is 42, but expectation is 43

