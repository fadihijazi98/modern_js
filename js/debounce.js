let timeOutId;

function debounce(fn, delay) {
    if(timeOutId)
        clearTimeout(timeOutId); // this always forces to calling function just one time after -delay
    // so if the timeOutId has a value then clear the old timeout
    // then make new one & update timeOutId value
    return function() {
        timeOutId = setTimeout(() => {
            fn();
        }, delay);
    }
}

function helloWorld() {
    let debounceFn = debounce(printHelloWorld, 400);
    debounceFn();
}

function printHelloWorld()
{
    console.log("hello world, " + parseInt((Math.random() * 10)));
}
