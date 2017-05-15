process.argv.forEach((val, index) => {

  if(index === 2){
    
   var inputVal = val.split(',');
   var stripped_input = inputVal.join('');
   var input_as_string = stripped_input.toString().substring(1,stripped_input.length-1);	
   console.log(encodeInput(input_as_string));
  }

});

function encodeInput(input) {
    var encoding = [];
    input.match(/(.)\1*/g).forEach(function(substr){ encoding.push([substr.length, substr[0]]) });
    return encoding;
}
