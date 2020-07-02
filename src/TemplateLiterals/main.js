let name = 'Nick';

function makeUpperCase(word) {
  return word.toUpperCase();
}

let template = `<h1>${makeUpperCase('Hello')} ${name}</h1>
<p>Learning ESS</p>`;

document.getElementById('egDiv').innerHTML = template;
