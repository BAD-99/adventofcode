const lineList = document.querySelector('pre').innerText.replace(/[a-zA-Z]+/g, '').split(`\n`);
lineList.pop();
const numberList = lineList.map(line => parseInt(line.slice(0,1) + line.slice(-1)));
const sum = numberList.reduce((acc, val) => acc + val,0);
console.log(sum);