//Set vs WeakSet 
//Set
let myset = new Set([1, 1, 2, 2, 3, 3, "a", "a"]);
console.log(myset);
let iterator = myset.keys();
console.log(iterator.next().value);
console.log(iterator.next());

//WeakSet

let MyWeakSet = new WeakSet([{ a: 1, b: 2 }]);
console.log(MyWeakSet);
