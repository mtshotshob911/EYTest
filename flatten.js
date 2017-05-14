const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

process.argv.forEach((val, index) => {
  if(index === 2){
      console.log(val);
      flatten(val);
  }
});
