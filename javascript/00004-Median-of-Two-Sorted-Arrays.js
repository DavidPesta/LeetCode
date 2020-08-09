/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let len1 = nums1.length;
	let len2 = nums2.length;
	let totalLength = len1 + len2;
	let totalLengthIsOdd = (totalLength % 2) == 1 ? true : false;
	
	// For odd length, this is the midpoint. For even length, this immediately follows the midpoint.
	let midpoint = Math.floor(totalLength / 2) + 1;
	
	let cursor1 = 0;
	let cursor2 = 0;
	
	let prevNumber = 0;
	while (cursor1 + cursor2 < midpoint) {
		let curNumber = null;
		
		if (nums1[cursor1] == undefined)
			curNumber = nums2[cursor2++];
		else if (nums2[cursor2] == undefined)
			curNumber = nums1[cursor1++];
		else {
			if (nums1[cursor1] < nums2[cursor2])
				curNumber = nums1[cursor1++];
			else
				curNumber = nums2[cursor2++];
		}
		
		if (cursor1 + cursor2 == midpoint) {
			if (totalLengthIsOdd)
				return curNumber;
			else
				return (curNumber + prevNumber) / 2;
		}
		
		prevNumber = curNumber;
	}
};

let nums1 = [1, 3];
let nums2 = [2];
let answer = findMedianSortedArrays(nums1, nums2);
console.log('First:', answer);

nums1 = [1, 2];
nums2 = [3, 4];
answer = findMedianSortedArrays(nums1, nums2);
console.log('Second:', answer);

nums1 = [1, 2, 4, 8, 16, 21];
nums2 = [3, 4, 5, 7, 18, 25, 101];
answer = findMedianSortedArrays(nums1, nums2);
console.log('Third:', answer);

nums1 = [1, 2, 4, 8, 16, 21];
nums2 = [3, 4, 5, 7, 18, 25];
answer = findMedianSortedArrays(nums1, nums2);
console.log('Fourth:', answer);

nums1 = [];
nums2 = [17];
answer = findMedianSortedArrays(nums1, nums2);
console.log('Fifth:', answer);

nums1 = [3];
nums2 = [];
answer = findMedianSortedArrays(nums1, nums2);
console.log('Sixth:', answer);
