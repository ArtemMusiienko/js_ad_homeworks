// TASK 1
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}
const client3= arrayUnique(clients1.concat(clients2));
console.log(client3);
console.log("_________________________TASK2");


// Task3
const characters = [
    {
      name: "Елена",
      lastName: "Гилберт",
      age: 17, 
      gender: "woman",
      status: "human"
    },
    {
      name: "Кэролайн",
      lastName: "Форбс",
      age: 17,
      gender: "woman",
      status: "human"
    },
    {
      name: "Аларик",
      lastName: "Зальцман",
      age: 31,
      gender: "man",
      status: "human"
    },
    {
      name: "Дэймон",
      lastName: "Сальваторе",
      age: 156,
      gender: "man",
      status: "vampire"
    },
    {
      name: "Ребекка",
      lastName: "Майклсон",
      age: 1089,
      gender: "woman",
      status: "vempire"
    },
    {
      name: "Клаус",
      lastName: "Майклсон",
      age: 1093,
      gender: "man",
      status: "vampire"
    }
  ];

  
  characters.forEach((el) => {
    const {name, lastName,age} = el;
    if (name&& lastName&&age) {
      
       console.log(el.lastName ,el.gender,el.age);

    }});
    console.log("_________________________TASK3");

    // TASK3
    const user1 = {
        name: "John",
        years: 30
      };
      let {name, years: age, isAdmin = false} = user1;

console.log(name);
console.log(age);
console.log(isAdmin);
console.log("_____________________________TASK4");
      
// TASK4
const satoshi2020 = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
      lat: 38.869422, 
      lng: 139.876632
    }
  }
  
  const satoshi2019 = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome'
  }
  
  const satoshi2018 = {
    name: 'Satoshi',
    surname: 'Nakamoto', 
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05'
  }
var objectAll = Object.assign(satoshi2020,satoshi2019,satoshi2018);
console.log(objectAll);


console.log("_____________________________TASK5");
const books = [{
  name: 'Harry Potter',
  author: 'J.K. Rowling'
}, {
  name: 'Lord of the rings',
  author: 'J.R.R. Tolkien'
}, {
  name: 'The witcher',
  author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
  name: 'Game of thrones',
  author: 'George R. R. Martin'
}
const newArray = [ ...books,bookToAdd];
console.log(newArray);



console.log("____________________________TASK6");
const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
  
}

let newEmployee=Object.assign({age: 1},{salary:1000}, employee);
console.log(newEmployee);




console.log("_____________________________Task7");
const array = ['value', () => 'showValue'];
var eArr = array.values();
for (let value of eArr) {
  console.log(value);
}

alert(eArr.value); // должно быть выведено 'value'
alert(showValue());  // должно быть выведено 'showValue'
