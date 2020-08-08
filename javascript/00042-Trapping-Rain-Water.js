/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heightMap) {
	let data = [];
	
	let totalWater = 0;
	let highestOnLeft = 0;
	let highestOnRight = 0;
	let heightMapLength = heightMap.length;
	for (let i = 0; i < heightMapLength; i++) {
		let iFromLeft = i;
		let iFromRight = heightMapLength - 1 - i;
		
		if (data[iFromLeft] == undefined) {
			data[iFromLeft] = {
				highestOnLeft: null,
				highestOnRight: null
			};
		}
		
		if (data[iFromRight] == undefined) {
			data[iFromRight] = {
				highestOnLeft: null,
				highestOnRight: null
			};
		}
		
		data[iFromLeft]['highestOnLeft'] = highestOnLeft;
		data[iFromRight]['highestOnRight'] = highestOnRight;
		
		if (heightMap[iFromLeft] > highestOnLeft)
			highestOnLeft = heightMap[iFromLeft];
		
		if (heightMap[iFromRight] > highestOnRight)
			highestOnRight = heightMap[iFromRight];
		
		if (data[iFromLeft]['highestOnLeft'] != null && data[iFromLeft]['highestOnRight'] != null) {
			// Math.max(0, x) is meant to prevent negative numbers.
			totalWater += Math.max(0, Math.min(data[iFromLeft]['highestOnLeft'], data[iFromLeft]['highestOnRight']) - heightMap[iFromLeft]);
		}
		
		// If heightMapLength is an odd number, iFromLeft and iFromRight will be the same
		// during the iteration that they are counted. Don't count it twice.
		if (iFromLeft == iFromRight)
			continue;
		
		if (data[iFromRight]['highestOnLeft'] != null && data[iFromRight]['highestOnRight'] != null) {
			// Math.max(0, x) is meant to prevent negative numbers.
			totalWater += Math.max(0, Math.min(data[iFromRight]['highestOnLeft'], data[iFromRight]['highestOnRight']) - heightMap[iFromRight]);
		}
	}
	
	return totalWater;
};

let answer = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(answer);
