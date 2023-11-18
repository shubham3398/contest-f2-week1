const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i = 0; i < data.length; i++){
    if (data[i].profession === "developer") console.log(data[i]);
  }
}

// 2. Add Data
function addData() {
  let a = prompt("Enter Your Name");
  let b = prompt("Enter Your Age");
  let c = prompt("Enter Your Profession");

  data.push(
    { name : a , age : parseInt(b), profession : c}
  );
}

// 3. Remove Admins
function removeAdmin() {
  for(let i in data){
    if(data[i].profession === "admin") {
      data.splice(i, 1);
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  let arr1 = [1, 2, 3, 4];
  let arr2 = [5, 6, 7, 8];

  let arr = arr1.concat(arr2);
  console.log(arr);
}

// 5. Average Age
function averageAge() {
  let ageSum = 0;
  for(let iterate of data){
    ageSum += iterate.age;
  }
  let averageAge = (ageSum / data.length);

  console.log(averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let iterate of data){
    if(iterate.age > 25) {
      console.log("age above 25 is present");
      return true;
    }
  }
  return false;
}

// 7. Unique Professions
function uniqueProfessions() {
  let unique = new Map();

  for(let i of data){
    if(unique.has(i.profession) === false){
      unique.set(i.profession, i.name);
      console.log(i);
    }
  }
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i of data){
    if(i.name === "john"){
      i.profession = 'manager';
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let count = 0;
  for(let i of data){
    if(i.profession === 'developer' || i.profession === 'admin'){
      count++;
    }
  }
  console.log(count);
}
