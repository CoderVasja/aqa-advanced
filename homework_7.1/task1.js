const handleNum = (num, onEven, onOdd) => {
    if (num % 2 === 0) {
        onEven();
    } else {
        onOdd();
    }
}

const numIsEven = () => {
    console.log('num is even');
}
const numIsOdd = () => {
    console.log('num is odd');
}

handleNum(5, numIsEven, numIsOdd);

