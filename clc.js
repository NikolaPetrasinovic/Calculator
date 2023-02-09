

(function (){
    let screen = document.querySelector('.screen')
    let buttons = document.querySelector('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('btn-equal')

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
          screen.value = 'Please Enter a Value';
        } else {
          let answer = eval(screen.value);
          screen.value = answer;
        }
      })

    clear.addEventListener('click', function(e){
        screen.value = '';
      })
})