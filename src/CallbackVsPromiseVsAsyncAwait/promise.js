'use strict';

let posts = [
  { title: 'Post One', body: 'This is first post' },
  { title: 'Post Two', body: 'This is second post' },
];

function getPost() {
  let output = '';
  setTimeout(() => {
    posts.forEach((post, index) => {
      output += `<li> ${post.title}: ${post.body} </li>`;
    });
    document.getElementById('template').innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error Something Went Wrong');
      }
    }, 2000);
  });
}

createPost({ title: 'Post Three', body: 'This is third post' })
  .then(getPost)
  .catch(error => console.log(error));

//promise all
const promise1 = Promise.resolve('Hello');
const promise2 = 100;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve('goodbye'), 1000);
});
const promise4 = fetch('http://jsonplaceholder.typicode.com/todos').then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);

// assync await
async function init() {
  await createPost({ title: 'Post Four', body: 'This is fourth post' });
  getPost();
}

init();

async function fetchUser() {
  const res = await fetch('http://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(`data: ${data}`);
}
fetchUser();
