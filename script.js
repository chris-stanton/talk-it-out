
//1. Start with the number 42 and set that equal to `majorKey`

  var majorKey = 42;
  //console.log(majorKey);

//2. Create condition logic to check if the `majorKey` is great or equal to 53
//2-1. If true, add 42 to `majorKey`
//2-2. If false, subtract 13 from `majorKey`

  if (majorKey >= 53) {
    majorKey = majorKey + 42;
    //console.log("greater than");
  } else {
    majorKey = majorKey - 13;
    //console.log("less than")
}

//3. Add a the string witha  value of 11 to `majorKey`

  majorKey = majorKey + '11';
  //console.log(majorKey);

//4. Create an array, loop through `majorKey` using `charAt`, set array[i] to each value

  var majorKeyArray = [];
  for (var i = 0; i < majorKey.length; i++) {
  majorKeyArray[i] = majorKey.charAt(i);
}
  //console.log(majorKeyArray);


//5. Remove the first and last values from the array
  majorKeyArray.shift();
  majorKeyArray.pop();
  //console.log(majorKeyArray);
//6. Create a new variable. Loop **backwards** through the array and store each value into the new variable, combining each of the values of that array

  var newVar = majorKeyArray[majorKeyArray.length -1];

  for(i = majorKeyArray.length - 2; i >= 0; i--) {
    newVar += majorKeyArray[i];
}


//7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.

  newVar = parseInt(newVar);
  majorKey = parseInt(majorKey);


//******* SWITCH PROGRAMMERS *******

//8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`

  majorKey = majorKey + newVar;

//9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
//If neither of these are true, set `majorKey` to 2.
  if (majorKey < 60) {
    majorKey = 14;
  } else if (majorKey == 2930) {
    majorKey = 27;
  } else {
    majorKey = 2;
}
//10. Create a while loop that counts down from 10 and increments `majorKey` by 1.
  i = 10
  while (i<10) {
  majorKey = majorKey + 1;
}

//11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
//is more than one character in the string. Return `val` and set the `majorKey` to the returned value.

function valConvert(val) {
    val = majorKey.toString();

    if(val.length > 1){
      majorKey = val.substring(1, val.length);
    }
    return majorKey;
}

//12. Call the function.
  valConvert();
//13. Console log `majorKey`. Create an index.html file, link in this Javascript file. Load in the browser, check the value.
  console.log(majorKey);
//14. Your answer should be a string value that equals 7. Is that what you got?
