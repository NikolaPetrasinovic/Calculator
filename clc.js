

(function (){
    let screen = document.querySelector('.screen')
    let buttons = document.querySelector('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('btn-equal')

    clear.addEventListener('click', function(e){
        screen.value = '';
      })
})