module.exports = function towelSort (matrix) {
	if (typeof matrix === 'undefined') return [];
	let res = [];
	matrix.forEach(function (arr, i) {res = (i % 2 === 1) ? res.concat(arr.reverse()) : res = res.concat(arr);});
	return res;
}