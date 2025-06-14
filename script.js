const body = document.querySelector('body');
const colorEle = document.querySelectorAll('.box');

colorEle.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = '#FF7D29'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = '#B6F500'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = '#725CAD'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = '#4DA8DA'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = '#D50B8B'
        }
    })
})