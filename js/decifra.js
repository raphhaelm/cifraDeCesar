var selecao = document.querySelector('#selecao');
selecao.addEventListener('input', function(){
    var cdc = document.querySelector('#cdc');    
    if(selecao.value != 'cdc'){
        cdc.style.display = ('none')
    } else {
        cdc.style.display = ('block')
    }
})
var btn = document.querySelector('.btn');
var codificar = document.querySelector('.radioCodi')
codificar.addEventListener('click',function () {
    var radioBtn = document.getElementsByName('codi')
    for (var i = 0; i < radioBtn.length; i++){
        if(radioBtn[i].checked && radioBtn[i].value == 'Codificar'){
            btn.value = radioBtn[i].value
        }
    }
})
var decodificar = document.querySelector('.radioDecodi')
decodificar.addEventListener('click',function () {
    var radioBtn = document.getElementsByName('codi')
    for (var i = 0; i < radioBtn.length; i++){
        if(radioBtn[i].checked){
            btn.value = radioBtn[i].value
        }
    }
    
})