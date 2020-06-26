function breakOut(array, changeValue, stopValue){
  for (let i=0; i<array.length; i++){
    if (array[i] === stopValue){
      break;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (let i=0; i<array.length; i++){
    if (array[i] === skipValue){
      continue;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  for (let i=0; i<array.length; i++){
    if (array[i] === findFn){
      return findFn;
      break;
    }
    else if (array[array.length-1] !== findFn){
      return null;
    }
  }
}

/*
function findBy(array, findFn){
  let match = null

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== findFn) {

      match = mostlyOne[i]
      break
    }
  }
}
*/
