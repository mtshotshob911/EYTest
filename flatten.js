let foo = arr => arr.reduce(
    	  (callback, initialValue) => callback.concat(
	     Array.isArray(initialValue) ? foo(initialValue) : initialValue
	  ), 
	  []
);

process.argv.forEach((val, index) => {
  if(index === 2){
     var inputVal = [val];
     var stripped_input = inputVal.join('');
     console.log(foo(stripped_input));
   }
  });
