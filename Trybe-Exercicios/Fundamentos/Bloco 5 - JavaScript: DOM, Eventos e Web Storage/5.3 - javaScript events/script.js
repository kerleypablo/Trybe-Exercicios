function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let tagUl = document.querySelector('#days');
  for ( let dia of dezDaysList){
    let newtagLi = document.createElement('li');
    newtagLi.innerText = dia;
    newtagLi.classList.add('day');
    if ( dia === 24 || dia === 31 ){
        newtagLi.classList.add("day","holiday");
    }else if (dia === 4 || dia === 11 || dia === 18 ){
        newtagLi.classList.add("day","friday");
    }else if (dia === 25){
        newtagLi.classList.add("day","holiday","friday");
    }
    tagUl.appendChild(newtagLi);
    
  }
  

  function BotaoMaker(feriados){
      let divBTm = document.querySelector('.buttons-container');
      let btm = document.createElement('button');
      btm.id='btn-holiday';
      btm.innerHTML=feriados;
      divBTm.appendChild(btm)
  }
  BotaoMaker("feriado");

  function displayHoliday(){
      let Pegarbotao = document.querySelector('#btn-holiday');
      let class_holiday = document.querySelectorAll('.holiday');
      let background = 'rgb(238,238,238)';
      let newcolor = 'green';

      Pegarbotao.addEventListener('click', function (){
        for (let dia of class_holiday){
           if (dia.style.background === newcolor ){
               dia.style.background = background;
               dia.style.color = '#777';
           }else {
            dia.style.background = newcolor;
            dia.style.color = 'white';
           }
        }
    })
  }

  function BotaoMakerFriday(nome){
    let divBTm = document.querySelector('.buttons-container');
    let btm = document.createElement('button');
    btm.id='btn-friday';
    btm.innerHTML=nome;
    divBTm.appendChild(btm)
}
BotaoMakerFriday("Sexta-Ferira");


function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU ';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);


  
displayHoliday();


    


  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.