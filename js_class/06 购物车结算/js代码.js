var all =document.getElementById('checkshop');
var  check =document.getElementsByName('check');
var submit =document.getElementsByName('Submit');

all.addEventListener('click',function(){
     for(let i=0 ;i<check.length;i++){
     //   value+= parseFloat(check[i].value)
         check[i].checked =this.checked
     }
     console.log(value);
})
console.log(check[1].value);

submit[0].addEventListener('click',function(){
    var value=0
    for(let i=0 ;i<check.length;i++){
        value+= parseFloat(check[i].value)
         
     }
        alert(value)
})

