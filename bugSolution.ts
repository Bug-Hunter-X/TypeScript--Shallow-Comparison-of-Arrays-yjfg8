function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false; 
  }
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'object' && arr1[i] !== null && typeof arr2[i] === 'object' && arr2[i] !== null) {
      if (!deepCompare(arr1[i], arr2[i])) { 
        return false; 
      } 
    } else if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }
  return true; 
}

function deepCompare(obj1: any, obj2: any): boolean {
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return obj1 === obj2; 
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false; 
  }
  for (const key of keys1) {
    if (!obj2.hasOwnProperty(key) || !deepCompare(obj1[key], obj2[key])) {
      return false; 
    }
  }
  return true; 
}