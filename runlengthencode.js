process.argv.forEach((val, index) => {

  if(index === 2){
   var inputVal = val.split(',');
   var stripped_input = inputVal.join('');
   var input_as_string = stripped_input.toString().substring(1,stripped_input.length-1);	
   console.log(input_as_string);
   console.log(encodeInput(input_as_string));
  }

});

function encodeInput(input) {
    var encoding = [];
    var prev, count, i;
    for (count = 1, prev = input[0], i = 1; i < input.length; i++) {
        if (input[i] != prev) {
            encoding.push([count, prev]);
            count = 1;
            prev = input[i];
        }
        else 
            count ++;
    }
    encoding.push([count, prev]);
    return encoding;
}
