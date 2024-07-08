function parImpar(num) {
    const digitos = num.split('');
    let res = 0;
    for (let i = 0; i < digitos.length; i++) {
        res += + digitos[i];
    }

    if (res % 2 == 0) {
        console.log('O número é "ímpar".');
    } else {
        console.log('O número é "par".');
    }
}

module.exports = {
    parImpar
};