export const sum = (a: number, b: number) => {
    return a + b;
}

// Test two
export const myBeverage = {
    delicious: true,
    sour: false,
};


// Teste Binario com função regular 
export const binaryStringToNumber = (binString: any) => {

    if (!/^[01]+$/.test(binString)) {
        throw new Error('Not a binary number.');

    }

    return parseInt(binString, 2);
};
