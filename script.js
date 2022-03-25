console.log('------------- # 4.a')
function newCalc(a, b) {
	return a + b
}
console.log(newCalc(3, 4))
console.log('------------- # 4.b')
function secondCalc(a, b) {
	return a - b
}
console.log(secondCalc(3, 4))
console.log('------------- # 4.c')
function thirdCalc(a, b) {
	return a * b;
}
console.log(thirdCalc(3, 4))
console.log('------------- # 4.c')
function fourthCalc(a, b) {
	return a / b;
}
console.log(fourthCalc(3, 4))
console.log('------------- # 5')
function countNumbers(n) {
	let newArray = [];
	for (i = 1; i <= n; i++) {
		newArray.push(i)
	}
	return newArray
}
console.log(countNumbers(5))
console.log('------------- # 6')
function reduceNumbers(n) {
	let newCounter = n;
	let secondArray = [];
	while (newCounter > 0) {
		secondArray.push(newCounter--);
	}
	return secondArray
}
console.log(reduceNumbers(5))
console.log('------------- # 7')
function pow(x, n) {
	let firstCount = x;
	for (i = 1; i < n; i++) {
		firstCount *= x
	}
	return firstCount
}
console.log(pow(3, 4))