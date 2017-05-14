process.argv.forEach((val, index) => {
  
  if(index === 2){
     // condition satisfied for input
     var number = val.split(",");

     // checking for integers anything other that integers log error
     var IsNumericInput = number.filter(function(i){
                                    return isNaN(i);
                                    }).length > 0;

if(IsNumericInput){
  //convert to String for evaliation
  var input = number.join('')[0];
  console.log(isPalindrome(input));
}else{
  console.log('Invalid data type supplied. Please enter list of integers e.g [1,4,6,7]');
}
  }

});

function isPalindrome(s,i) {
 //better perfomance with non branching tail recursion
 return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}
