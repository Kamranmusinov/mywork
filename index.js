// let name = prompt('Введите ваше имя:');
// if (name === 'Alex') {
//     let accountNumber = prompt('Введите номер вашего счета:');
//     if (accountNumber === '7777') {
//         let amount = parseInt(prompt('Введите сумму для обналичивания:'));
//         if (amount <= 10000) {
//             alert('Все отлично.');
//             let withdrawn = amount;
//             let remainingBalance = 10000 - withdrawn;
//             alert(`Вы сняли ${withdrawn} рублей. Остаток на вашем счету: ${remainingBalance} рублей.`);
//         } else {
//             alert('Недостаточно средств.');
//         }
//     } else {
//         alert('Пользователь не найден.');
//     }
// } else {
//     alert('Пользователь не найден.');
// }


let arr = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 44 } }]];
let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i][0].a.price;
}

console.log(total);