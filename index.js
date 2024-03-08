// const obj = {
//     firstname: 'Dauren',
//     lastname: 'Toktogulov',
//     grtFullName: function(){
//         console.log(`My firstname is ${this.firstname} and my lastname is ${this.lastname}`);
//     },
//     age: 13,
// };


// obj.grtFullName();

// function grtFullName() {
//     console.log(`My firstname is ${obj.firstname} and my lastname is ${obj.lastname}`);
// };

// grtFullName();



// function renderStars (length) {
//     let star ='';
//     let i = 0;
//     // for (let i = 0; i < length +4; i++){
//     //     star += '*';
//     // }

//     while (i < length + 4){
//         star += '*';
//         i++;
//     }

//     console.log(star);
// }
// const text = prompt('enter a sentence');

// renderStars(text.length);
// console.log(`* ${text} *`);
// renderStars(text.length);

const randomBodyPart = ['nos', 'glaz', 'cherep'];
const randomAdjectives = ['vonuchaya', 'unylaya', 'duratskaya'];
const randomWords = ['muxa', 'vydra', 'dubina', 'martyshka', 'krysa'];


function getRandomWord(array){
    const word  = array [Math.floor(Math.random() * array.length)];

    return word;

};

const text = `u teba ${getRandomWord
(randomBodyPart)} slovno ${getRandomWord
(randomAdjectives)} ${getRandomWord(randomWords)}!!!`;

console.log(text);
//  const rendomWord = getRandomWord (randomWorlds);
// console.log(randomWord);