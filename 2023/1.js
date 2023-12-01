const lineList = document.querySelector('pre').innerText.replace([a-zA-Z], '').split(' ');
const numberList = lineList.map(line => line.slice(0) + line.slice(-1));
const sum = numberList.reduce((acc, val) => acc + parseInt(val), 0);
console.log(sum);