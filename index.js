// // Q1 Filtering Based on Property Values How can you use filter to create an array of objects where each object has a specific property value greater than a given threshold?
// interface User {
//   name: string;
//   age: number;
// }
// //
// const users: User[] = [
//   { name: "shaheer", age: 32 },
//   { name: "ali", age: 30 },
//   { name: "ahmed", age: 35 },
//   { name: "farhan", age: 60 },
//   { name: "nawaz", age: 20 },
// ];
// const age = 25;
// const filterAge = users.filter((obj) => age < obj.age);
// console.log(filterAge);
// const mapAge = filterAge
//   .map((obj) => {
//     return { ...obj, name: obj.name.toUpperCase() };
//   })
//   .map((obj) => {
//     return { ...obj, age: obj.age + 6 };
//   });
// const mapAge = filterAge
//   .map((obj) => {
//     obj.name = obj.name.toUpperCase();
//     return obj;
//   })
//   .map((obj) => {
//     obj.age += 6;
//     return obj;
//   });
// console.log(mapAge);
// const reduceAge = filterAge.reduce((acc, curVal) => acc + curVal.age, 0);
// console.log(reduceAge);
// ------------------------------------------------------------------------------------------
// Q2 Mapping and Transforming Object Properties How can you use map to transform an array of objects by doubling the value of a certain numeric property for each object?
// interface Course {
//   itemName: string;
//   price: number | string;
// }
// const shoppingCart: Course[] = [
//   {
//     itemName: "J.S course",
//     price: "booking",
//   },
//   {
//     itemName: "Python course",
//     price: 999,
//   },
//   {
//     itemName: "T.S",
//     price: "booking",
//   },
//   {
//     itemName: "Data Science course",
//     price: 12999,
//   },
// ];
// const filtArr = shoppingCart.filter((obj) => typeof obj.price !== "string");
// console.log("FILTERED ARRAY", filtArr);
// const mapArr = filtArr
//   .map((obj) => {
//     return { ...obj, itemName: obj.itemName.toUpperCase() };
//   })
//   .map((obj) => {
// if (typeof obj.price !== "string") {
//   obj.price = obj.price * 2;
// }
// return obj;
// ============>>>>> SPREAD OPERATOR <<<<<=================
//     if (typeof obj.price !== "string") {
//       return { ...obj, price: obj.price * 2 };
//     }
//   });
//  ========>>>>> TERNARY OPERATOR <<<<<<============
// const mapArr = filtArr.map((obj) => ({
//   itemName: obj.itemName.toUpperCase(),
//   //                  CONDITION             TRUE       :  FALSE
//   price: typeof obj.price === "number" ? obj.price + 5 : obj.price,
// }));
// console.log("MAP ARRAY", mapArr);
// const redArr = mapArr.reduce((acc, curVal) => {
//   // Check if price is a number before adding to the accumulator
//   if (typeof curVal.price !== "string") {
//     return acc + curVal.price;
//   } else {
//     return acc;
//   }
// }, 0);
// console.log("Total price of Courses : ====>>> ", redArr);
//-----------------------------------------------------------------------------------------------
// Q3 Reducing to a Unique Set How can you use reduce to create a unique set of values from a specific property that appears in multiple objects within an array?
// const people = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Alice" },
//   { id: 4, name: "Diana" },
//   { id: 5, name: "Diana" },
// ];
// const redName: string[] = people.reduce((acc: string[], curr) => {
//   if (!acc.includes(curr.name)) {
//     acc.push(curr.name);
//   }
//   return acc;
// }, []);
// console.log(redName);
//---------------------------------------------------------------------------------------------
//// Q4 Filtering Based on Substring How can you use filter to create an array of strings from an array of objects where a string property contains a certain substring?
// interface MyObject {
//   name: string;
// }
// const objectsArray: MyObject[] = [
//   { name: "example" },
//   { name: "sample" },
//   { name: "template" },
//   { name: "simple" },
// ];
// const substring: string = "ample";
// const filObj = objectsArray.filter((obj) => obj.name.includes(substring));
// console.log(filObj);
// const mapObj = filObj.map((obj) => obj.name);
//-----------------------------------------------------------------------------------------
// Q5 Filtering and Mapping Combined How can you chain filter and map to first filter an array of objects based on a boolean property and then map the filtered array to a different structure?
const originalArray = [
    { id: 1, isActive: true, name: "John" },
    { id: 2, isActive: false, name: "Jane" },
    { id: 3, isActive: true, name: "Doe" },
];
const filArr = originalArray
    .filter((obj) => obj.isActive) // filter only return truthy values
    .map((obj) => ({ userId: obj.id + 1, userName: obj.name }));
console.log(filArr);
export {};
//-------------------------------------------------------------------------------------------
