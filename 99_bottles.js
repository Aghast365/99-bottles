function bottleSong(bottles) {
	function minusOne(bottles, bottlesLeft) {
	if (bottlesLeft < 0) {return;}
	
	let number = ((bottlesLeft > 0) ? bottlesLeft : ((bottlesLeft === 0) ? "no more" : bottles)).toString();
	let plural = (bottlesLeft !== 1) ? "bottles" : "bottle";
	
	console.log(`${number.charAt(0).toUpperCase() + number.substring(1)} ${plural} of beer on the wall, ${number} ${plural} of beer.`);
	
	bottlesLeft--;
	
	number = (bottlesLeft > 0) ? bottlesLeft : ((bottlesLeft === 0) ? "no more" : bottles);
	plural = (bottlesLeft !== 1) ? "bottles" : "bottle";
	let store = (bottlesLeft >= 0) ? "Take one down and pass it around" : "Go to the store and buy some more";
	
	console.log(`${store}, ${number} ${plural} of beer on the wall.`);
	
	minusOne(bottles,bottlesLeft);
	}
	minusOne(bottles,bottles);
	
};

bottleSong(99);
