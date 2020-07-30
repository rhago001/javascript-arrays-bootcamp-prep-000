var chocolateBars = [ "snickers","hundred grand", "kitkat"," skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray (array, element)
{
  array.unshift (element)
  return array
}

<<<<<<< HEAD
function addElementToEndOfArray (array, element)

{
 return [...array , element] 
}


function destructivelyAddElementToEndOfArray (array, element)
{
  array.push( element)
  return array

}

function accessElementInArray(array, index)
{
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
 
  
}


function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array 
}

function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)

}

function removeElementFromEndOfArray(array)
{
    return array.slice(0, array.length-1)
 
}
=======

//var addElementToBeginningOfArray = ["array", " element"]
addElementToBeginningOfArray[0] = "foo";


//var removeElementFromBeginningOfArray=[removeElementFromBeginningOfArray.slice(1)];
//removeElementFromBeginningOfArray=

//console.log (removeElementFromBeginningOfArray)
>>>>>>> fc479a032450a975b205867c05c48a9afa3cd2bd
