let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let total = 0;
for (let numero of numbers){
     total += numero
}

console.log(total);

let media = total / numbers.length
console.log('media :' + media);

if ( media > 20 ){
    console.log('valor maior que 20 ');
}else ('Valor menor que 20');


   let maior = numbers[0];
   let impares = 0;
   let menor = numbers[0];
    for (let numero of numbers){
        if (numero > maior){
            maior = numero;
        }

        if (numero%2 != 0){
            impares++; if (numero > maior){
                maior = numero;
            }
        }

        if (numero < menor){
            menor = numero;
        }
    }
    
    

console.log('maior valor ' + maior);
if (impares === 0 ){
    console.log('nenhum valor impar' );  
}else 
console.log('qtd impares ' + impares);

console.log('menoor valor ' + menor);

let ate25= [];
for ( let i = 1 ; i <= 25 ; i++ ){
    ate25.push(i);
}
console.log(ate25);

for (let num of ate25){
    num = num / 2;
    console.log(num);
}



