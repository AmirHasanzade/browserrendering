// https://stackoverflow.com/questions/52635660/can-link-rel-preload-be-made-to-work-with-fetch

console.time("preload.js");
fetch("http://localhost:8088/3000/js/main.js", {
        method: 'GET',
        credentials: 'include',
        mode: 'no-cors',
    })
    .then(res => {
        console.log("preload.js finished");
        console.timeEnd("preload.js"); // Using preload, time will be 2ms instead of 3000ms
    });