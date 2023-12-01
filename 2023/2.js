const replaceArray = [['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5], ['six', 6], ['seven', 7], ['eight', 8], ['nine', 9]];
const lineList = replaceArray
    .reduce((a, b) => a.replaceAll(b[0], b[0] + b[1] + b[0]), document.querySelector('pre').innerText)
    .replace(/[a-zA-Z]+/g, '')
    .split('\n');
lineList.pop();
const numberList = lineList.map(line => parseInt(line.slice(0, 1) + line.slice(-1)));
const sum = numberList.reduce((acc, val) => acc + val);
console.log(sum);