async function postData(url = '') {
    const data = { description: "blah", done: false }
    const res = await fetch(url = '', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

postData('http://localhost:3000/?content-type=Application/json')

// async function getData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'GET',
//         mode: 'cors', 
//         cache: 'no-cache',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     return response.json(); // parses JSON respons into
// }

// getData('http://localhost:3000/', {})
//     .then(data => {
//         console.log(data); // JSON data parsed by `data.json
//     });









// function postData(url = '', data = {}) {
//     const data2 = {description: "blah", done: false}
//     fetch(url, {
//         method: 'POST', 
//         mode: JSON.stringify(data2),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     return response.json(); // parses JSON respons into
// }

// postData('http://localhost:3000/', )
//     .then(data2 => {
//         console.log(data2); // JSON data parsed by `data.json
//     });


