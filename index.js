//entrega da terça


  //Função add
  function add(a, b) {
      return a + b;
    }


    console.log(add(2,4))

    //função chamada "multiply"
    function multiply(a, b) {
      let c = 0;
      for (let i = 0; i < b; i = add(i, 1)) {
        c = add(a, c);
      }
      return c;
    }
    console.log(multiply(6,8)) 


    // função chamada "power" 
    function power(x, n) {
      let result = 1;
      for (var i = 1; i <= n; i = add(i, 1)) {
        result = multiply(result, x);
      }
      return result;
    }
    console.log(power(2, 8));



    //função chamada "factorial" 
    function factorial(x) {
      let result = 1;
      let cont = 2;
      while (cont <= x) {
          result = multiply(result, cont);
          cont = add(cont,1);
      }
      return result;
    }
    console.log(factorial(4))



    // função chamada "fibonacci" 
    function fibonacci(x) {
      let result = 1;
      let result2 = 0;
      let temp1 = 0;
      let temp2 = 0;
      for (var i = 2; i <= x; i = add(i, 1)) {
        temp1 = add(result, result2);
        temp2 = result;
        result = temp1;
        result2 = temp2;
      }
      return result;
    }

    console.log(fibonacci(7))


  









    


  //função chamada "add"
  //function add(x, y) {
  //  let resultado = x;
  //  let n = y;
  //  while (n > 0) {
  //    resultado += 1;
  //    n--;
  //  }
  //  return resultado;
  //}




