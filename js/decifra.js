var cdc = document.querySelector('#cdc');
cdc.style.display = ('none')
var selecao = document.querySelector('#selecao');

selecao.addEventListener('input', function(){
    if(selecao.value == 'cdc'){
        cdc.style.display = ('')
    } else {
        cdc.style.display = ('none')
    }
})
var btn = document.querySelector('.btn');
var radioRes

// btn.onclick = function (){
//     var codiDecodi = document.getElementsByName('codi');
//     for ( var i = 0; i < codiDecodi.length; i++){
//         if(codiDecodi[i].value === 'codificar'){
//             btn.textContent = 'aooobaa'
//         }
//     }
// }
// selecao.addEventListener('click', function(){
//    if(codigo.checked == true ){
//         cdc.style.display = ('');}
    
// })
// var base64 = document.querySelector('#base64');
// base64.addEventListener('click', function(){
//     cdc.style.display = ('none');
// })

