
let n = 5;
let linha = '';
if (n > 0) {
    for(let i = 0 ; i < n; i++){
            linha += '*';
            
    }
    for(let c = 0 ; c < n; c++){
        console.log(linha)
        
    }
} 

// 2 

console.log('exe 2 ')
let linha2 = '';
    if (n > 0) {
        for(let i = 0 ; i < n; i++){
                linha2 += '*';
                console.log(linha2)
                
        }
    } 


//3

console.log('exe 3 ');
let aux = '';
let aux2 = n;
let cont = 0;
if (n > 0) {
   for (let linha3 = 1 ; linha3 <= n ; linha3++){
       for (let linha4 = aux2; linha4 > 0; linha4-- ){
               aux +=' ';
               
       }
       cont++
       for(let linha4 = 1 ; linha4 <= cont ; linha4++){
            aux +='*'
       }
       aux2--;
       console.log(aux)
       aux = '';
   }
} 


function compareTrue(p1, p2) {
    if ( p1 === true && p2 === true) {
      return true;
     }else {
      return false;
    }
}
  