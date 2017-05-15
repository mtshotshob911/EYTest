process.argv.forEach(function (val, index) {
	if(index === 2){
	  var inputval = val;
	  console.log(flatten(inputval));
	}
	
});

function encodeInput(input) {
    var encoding = [];
    input.match(/(.)\1*/g).forEach(function(substr){ encoding.push([substr.length, substr[0]]) });
    return encoding;
}
