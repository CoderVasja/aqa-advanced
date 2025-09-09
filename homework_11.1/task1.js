const textByTimer = (text, timer) => {
    setTimeout(() => {
        console.log(text);
    }, timer);
}

textByTimer('Hello', 1000);
textByTimer('World', 2000);
textByTimer('Hello World', 3000);
