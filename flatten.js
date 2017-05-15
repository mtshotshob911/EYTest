const flatten = list => list.reduce(
    (firsEntry, secondEntry) => firsEntry.concat(Array.isArray(secondEntry) ? flatten(secondEntry) : secondEntry), []
);

process.argv.forEach((val, index) => {
  if(index === 2){
      console.log(val);
      flatten(val);
  }
});
