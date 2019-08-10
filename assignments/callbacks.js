// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const tools = ['Hammer', 'Screwdriver', 'Crowbar', 'Wrench'];


  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  };

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

  firstItem(tools, function(first) {
    console.log(first)
  });

  //My example
  function firstItem2(arr) {
      x = arr[0];
      console.log(x);
  };

  firstItem2(items);
  firstItem2(tools);


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr.length);
};

getLength(items, function(length) {
    console.log(length);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let newArr = arr;
  return cb(newArr[arr.length - 1]);
};

last(items, function(last) {
    console.log(last);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
};

sumNums(8, 24, function(add) {
    console.log(add);
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
};

multiplyNums(8, 24, function(mult) {
    console.log(mult);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item))
};

contains('yo-yo', items, function(contain) {
    console.log(contain);
});

/* STRETCH PROBLEM */

const manyThings = ['spider', 'spider', 'spider', 'penguin', 'spider', 'spider', 'duck', 'spider'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const duplicates = [];
  const newArray = cb(array.filter(function(el) {
      if (duplicates.indexOf(el) == -1) {
          duplicates.push(el);
          return true;
      }
      return false;
  }))
};

removeDuplicates(manyThings, function(fewThings) {
    console.log(fewThings);
});