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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is third post' }, getPost);
