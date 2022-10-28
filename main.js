// Write a for loop that logs every even number starting from 1000 down to 0
for (i = 1000; i > 0; i--){
  if(i % 2 == 0){
    console.log(i);
  }
}

// Write a for loop that starts at 0 and goes to 10000
for(i = 0; i <= 10000; i++){
  if(i === 2500)alert("A quarter of the way there!");
  else if(i === 5000)alert("Halfway there!");
  else if(i === 10000)alert("The loop is done!");
}

// write an array of your top 5 favorite tv shows 
const myShows = [null, "Hannibal", "Dexter", "Family Guy", "911", "King of Queens"];

// Loop through the array of your top 5 favorite tv shows and log to the console
for(let i = 1; i < myShows.length; i++){
  console.log("My #" + i + " favorite tv show is " + myShows[i]);
}
for(let i = 0; i < 10; i++) {
  console.log("Hello");
}