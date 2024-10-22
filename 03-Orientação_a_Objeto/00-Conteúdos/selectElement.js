// let p1 = new Person('Enzo');

// document.querySelector('.buttonAge').addEventListener('click', buttonAge);
// document.querySelector('.buttonSteps').addEventListener('click', buttonSteps);

// let divNameAge = document.querySelector('.age');
// let divNameSteps = document.querySelector('.steps');

// let newTagAge = document.createElement('strong');
// newTagAge.innerHTML = p1.namePerson + '?'
// divNameAge.appendChild(newTagAge)

// let newTagSteps = document.createElement('strong');
// newTagSteps.innerHTML = p1.namePerson + '?'
// divNameSteps.appendChild(newTagSteps)


// function buttonAge(){
//    let input = document.querySelector('.inputAge');
//    input.value = p1.age
//    p1.addAnAge()
   
// }

// function buttonSteps(){
//    let input = document.querySelector('.inputSteps');
//    p1.takeASteps()
//    input.value = p1.step
// }

class Person{

   age = 0;

   static hands = 2;

   constructor(name){
      this.namePerson = name;
   }

   sayHi(){
      console.log(`Disse Oi!!`)
   }

}


class Student extends Person{

   constructor(name, id){
      super(name)
      this.registration = id
   }

   sayHello = () => {
      super.sayHi()
   }

}

let p1 = new Student('Carlos', 1);

p1.age = 100;

console.log(p1.namePerson+' tem '+p1.age+' anos e a sua matricula é #'
   +p1.registration+' e tem ' + Student.hands + ' mãos ')






