function resetCars(c1, c2) {
  c1.style.marginLeft = '0px';
  c2.style.marginLeft = '0px';
}

window.onload = function () {
  let button = document.getElementById('start-race-btn');
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');
  resetCars(car1, car2);

  // 1. Qual tipo de evento eu devo escutar
  // 2. O que eu faço quando o evento acontecer
  button.addEventListener('click', function () {
    car1.style.marginLeft = (parseInt(car1.style.marginLeft) + (Math.random() * 100)) + 'px';
    car2.style.marginLeft = (parseInt(car2.style.marginLeft) + (Math.random() * 100)) + 'px';

    // Compara marginLeft com window.innerWidth
    if (parseInt(car1.style.marginLeft) + 200 >= window.innerWidth) {
      alert('Carro VERMELHO venceu!!');
      resetCars(car1, car2);
    } else if (parseInt(car2.style.marginLeft) + 200 >= window.innerWidth) {
      alert('Carro VERDE venceu!!');
      resetCars(car1, car2);
    }
  });

};