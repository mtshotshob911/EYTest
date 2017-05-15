process.argv.forEach((val, index) => {

  if(index === 2){
     // condition satisfied for input
     var numbers_as_input = val.split(',');

     // checking for integers anything other that integers log error
     var IsNumericInput = numbers_as_input.filter(function(i){
                                    return isNaN(i);
                                    }).length > 0;

if(IsNumericInput){
  //convert to String for evaliation
  var stripped_input = numbers_as_input.join('');
  var input_as_string = stripped_input.toString().substring(1,stripped_input.length-1);

  console.log(isPalindrome(input_as_string));
}else{
  console.log('Invalid data type supplied. Please enter list of integers e.g [1,4,6,7]');
}
  }

});

function isPalindrome(input_string,counter) {
 //better perfomance with non branching tail recursion
 return (counter=counter||0)<0||counter>=input_string.length>>1||input_string[counter]==input_string[input_string.length-1-counter]&&isPalindrome(input_string,++counter);
}

