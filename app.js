





 function setNumber(num) {
     var input = document.getElementById("number")
     // input.value = input.value + num
             input.value += num

     // console.log(num, input, "num")
 }


 function ans() {
     var inputValue = document.getElementById("number")
     var output = eval(inputValue.value)
     inputValue.value = output
     
 }

 function results(){
    var inputValue = document.getElementById("number")
    console.log("inputValue", inputValue.value)
 }



  

// function setNumber(num) {
//     var input = document.getElementById("number")
//     input.value = sum
// }

 

//    function setNumber(num){
//     var input = document.getElementById("number")
//     input.Value = input.Value + num
//       input.Value += num
//       console.log(num, input, "num")
//    }

//      function ans(){
//         var inputValue = document.getElementById(Number)
//         var output = eval(inputValue.value)
//         inputValue.value = output
//      }


// function add() {
//     let num1 = parseInt(document.getElementById("num1").value);
//     let num2 = parseInt(document.getElementById("num2").value);
//     let result = num1 + num2;
//     document.getElementById("result").innerHTML = "Result: " + result;
//   }
  
//   function subtract() {
//     let num1 = parseInt(document.getElementById("num1").value);
//     let num2 = parseInt(document.getElementById("num2").value);
//     let result = num1 - num2;
//     document.getElementById("result").innerHTML = "Result: " + result;
//   }
  
//   function multiply() {
//     let num1 = parseInt(document.getElementById("num1").value);
//     let num2 = parseInt(document.getElementById("num2").value);
//     let result = num1 * num2;
//     document.getElementById("result").innerHTML = "Result: " + result;
//   }
  
//   function divide() {
//     let num1 = parseInt(document.getElementById("num1").value);
//     let num2 = parseInt(document.getElementById("num2").value);
//     let result = num1 / num2;
//     document.getElementById("result").innerHTML = "Result: " + result;
//   }
  