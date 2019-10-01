module.exports = function multiply(first, second) {
    let f = first.split('').reverse();
    let s = second.split('').reverse();
    let mas = [];
    let sum=0;
    if(f.length<s.length){
      let k=s;
      s=f;
      f=k;
    } 
    for(let i=0;i<f.length;i++){
      sum=0;
      for(let k=i,j=0;k>=0 && j<s.length;j++,k--){
        sum+=f[k]*s[j];
      }
      mas[i]=sum;
    }

    for(let i=1;i<s.length;i++){
      sum=0;
      for(let k=i, j=f.length-1;k<s.length;k++,j--){
        sum+=s[k]*f[j];
      }
      mas[mas.length]=sum;
    }

    for (var i = 0; i < mas.length; i++) {
      var stay = mas[i] % 10;
      var move = Math.floor(mas[i] / 10);
      mas[i] = stay;
  
      if (mas[i + 1])
        mas[i + 1] += move;
      else if (move != 0)
        mas[i + 1] = move;
    }

    return mas.reverse().join('');
}
