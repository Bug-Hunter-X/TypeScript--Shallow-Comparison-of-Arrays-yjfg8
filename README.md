# TypeScript: Shallow Comparison of Arrays
This repository demonstrates a common pitfall in TypeScript when comparing arrays: the simple equality check only considers references, not the content of the arrays.  If arrays contain nested objects or arrays, this comparison will fail to identify differences in the nested structures.

The `bug.ts` file shows a function that uses a shallow comparison. The `bugSolution.ts` file offers a corrected version that provides a deeper comparison for nested objects or arrays. 

## Bug Description:
The `compareArrays` function in `bug.ts` performs a shallow comparison. If you pass arrays with nested objects or arrays, the comparison will return `true` even if the nested elements differ. 

## Solution:
The `compareArrays` function in `bugSolution.ts` recursively compares nested arrays and objects, solving the shallow comparison issue.