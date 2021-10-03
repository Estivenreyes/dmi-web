const user = {
    vidas: 1,
    name: undefined
};

// &&: Y
// ||: O

// if - else
// else if

if(user.vidas === 0 ) {
    console.log('Game over');
} else if(user.vidas === 1) {
    console.log('Estas apunto de morir, cuidado')
} else if (user.vidas === 2) {
    console.log('Ve con cuidado');
} else {
    console.log('Sigue jugando!');
}