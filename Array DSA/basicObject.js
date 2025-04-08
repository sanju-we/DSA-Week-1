const obj = {
  name: "sanju",
  age: 19,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "football"; //added a element on obj
delete obj.hobby; // deleted the key value pair

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);
console.log(obj);
obj.sayMyName();
// Object.keys() ,values() ,entries()

//--------------------------time complexity---------------------------
// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.Keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)
