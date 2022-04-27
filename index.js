// let result = ''

// function display(val){
//     console.log(result += val)
// }

// function solve(){
//     console.log(eval(result))
// }
 function display(val){
     document.getElementById('result').value += val
 }

 function solve(){
     let m = document.getElementById('result').value 
     let v = eval(m)
     document.getElementById('result').value = v
 }

 function allClear(){
     document.getElementById('result').value = ''
 }