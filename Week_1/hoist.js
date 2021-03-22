// #1
console.log(hello);
var hello = 'world';
//var hello;
//console.log(hello); 
//hello = "world";

//output undefired

//#2
var needle = 'haystack';
test();
function test(){
  var needle = 'magnet';
  console.log(needle);
}
//var needle;
//need;e = "haystack";
//test(); 
//function test(){
//   var needle = "magnet";
//   console.log(needle);
// }

// output: magnet

//#3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
print();
console.log(brendan);
//var brendan;
//brendan = "super cool";
// print();
// console.log(brendan);
// function print(){
//   brendan = "only okay";
//   console.log(brendan);
// }
// output: only okay
// only okay

//#4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

// var food;
// food ="chicken";
// console,log(food);
// eat();
// function eat (){
//   var food;
//   food = "half-chicken";
//   console.log(food);
//   food = "gone";
// }
//output: chicken
//half-chicken

//#5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
//var mean
//mean();
//console.log(food);
//mean = function() {
//   var food;
//   food = "chicken";
//   console.log(food);
//   food = "fish";
//   console.log(food);
// };
// console.log(food);
//output: typeError: mean is not a function


//#6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

//var genre 
//console.log(genre);
//genre = "disco";
// rewind();
// console.log(genre);
// function rewind() {
//   var genre;
//   genre = "rock";
//   console.log(genre);
//   genre = "r&b";
//   console.log(genre);
// }
//Output: undefinded
// rock
// r&b
// disco


//#7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  console.log(dojo);
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

//dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
// function learn() {
//   var dojo
//   console.log(dojo);
//   dojo = "seattle";
//   console.log(dojo);
//   dojo = "burbank";
//   console.log(dojo);
// }
//output: san jose
//undefined
//seattle
//burbank
//san jose


//#8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
// function makeDojo(name, students) {
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if (dojo.students > 50) {
//   dojo.hiring = true; 
//   } else if (dojo.students <= 0){
//     dojo = "closed for now";
//   }
//   return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
//output: TypeError: assignment to constant variable
