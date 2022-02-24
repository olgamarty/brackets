module.exports = function check(str, bracketsConfig) {
	let stack = [];
	const openBrackets = bracketsConfig.map(item => item[0]);
	const bracketsPair = {};
	const bracketsTwin = ['|', '7', '8'];

	for (var i = 0; i < bracketsConfig.length; i++) {
		bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
	}


	for (let i = 0; i < str.length; i++) {
		let currentSymbol = str[i];

		if (openBrackets.includes(currentSymbol) && !bracketsTwin.includes(currentSymbol)) {
			stack.push(currentSymbol);
		} else
			if (bracketsTwin.includes(currentSymbol) && !stack.includes(currentSymbol)) {
				stack.push(currentSymbol);
			} else {
				if (stack.length === 0) {
					return false;
				}

				let topElement = stack[stack.length - 1];

				if (bracketsPair[currentSymbol] === topElement) {
					stack.pop();
				} else {
					return false;
				}
			}
	}

	return stack.length === 0;
}
