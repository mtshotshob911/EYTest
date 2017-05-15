process.argv.forEach((val, index) => {

  if(index === 2){
      console.log(encodeInput(val));
  }

});

function encodeInput(input) {
    var encoding = [];
    input.match(/(.)\1*/g).forEach(function(substr){ encoding.push([substr.length, substr[0]]) });
    return encoding;
}
