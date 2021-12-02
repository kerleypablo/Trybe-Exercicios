let player = {
    name: 'marta',
    lastName:'Silva',
    age:34,
    medals : {
        golden: 2,
        silver : 3
    }
}



console.log('competidora ' +player.name +  ' ' + 'de ' + player.age + ' '+ 'anos ,ganhou '+ player.medals.golden + ' medalhas de ouro ');  

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

console.log('a jogadora ' + player.name + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length);

let teste = 'medals';
console.log(player[teste]);


let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }



  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let index in names){
      console.log('ola ' + names[index]);
  }

// nao é possivel percorrer objeto com for-of
  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let index of names){
      console.log(index);
  }

