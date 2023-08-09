function cubeNumber(number) {
  if (typeof number !== "number" || number < 0) {
    return "Please entre a number";
  } else {
    return number * number * number;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter string";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else {
    let x = [];
    if (arr[0] === arr[1]) {
      return "equal";
    } else if (arr[0] < arr[1]) {
      x.push(arr[1]);
      x.push(arr[0]);
      return x;
    } else if (arr[0] > arr[1]) {
      return arr;
    }
  }
}

function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  let finalOutput = street + "," + house + "," + society;
  return finalOutput;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Please do not enter empty array";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
    if (sum >= totalDue) {
      return true;
    } else if (sum < totalDue) {
      return false;
    }
  }
}
