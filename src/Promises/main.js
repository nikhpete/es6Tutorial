'use strict';

//used for deffered n async computations
// represents a computation not completed yet but in future

// let myPromise = Promise.resolve('foo');

// myPromise.then(res => console.log(res));

// let mySPromise = new Promise((res, rej) => setTimeout(() => res(4), 3000));

// mySPromise.then(res => console.log(res + 2)).catch(error => console.log(error));

// const value = async () => {
//   const c = await new Promise((res, rej) => setTimeout(() => res(5), 100));
//   console.log(c);
//   console.log('foo');
// };

// const value2 = async () => {
//   const c = await new Promise((res, rej) => res(10));
//   console.log(c);
//   console.log('laa');
// };
// value();
// value2();

// a simple data fecth code
function getData(method, url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        res(xhr.response);
      } else {
        rej({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.error = () => {
      rej({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos')
  .then(data => {
    let todos = JSON.parse(data);
    let output = '';
    todos.valueOf().forEach(todo => {
      output += `
      <li>
        <h2>${todo.title}</h2> <p>${todo.completed}</p>
      </li>
      `;
    });
    document.getElementById('template').innerHTML = output;
  })
  .catch(error => console.log(`${error.status} ${error.statusText}`));
