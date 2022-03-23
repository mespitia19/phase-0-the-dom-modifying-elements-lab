// Write your code here!
document.querySelector('main').remove();
//let const name = new type(arguments);
//const newHeader = 'h1#victory';
//newHeader.append('h1#victroy');
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Max Espitia is the champion"
document.body.appendChild(newHeader)

