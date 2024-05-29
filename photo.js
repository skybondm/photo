const buttons = document.querySelector('.seasons')
const images = document.querySelectorAll('.port_image')

buttons.addEventListener('click', change_image)
function change_image(event){
    if (event.target.classList.contains('season')){
        let data = event.target.dataset.season
        images.forEach((img, index)=>img.src=`./images/${data}/${index+1}.jpg`)
    }
}
document.addEventListener('DOMContentLoaded', function(){
    let all_buttons = document.querySelectorAll('.season')
    all_buttons.forEach(function (but){
        but.addEventListener('click', function (){
            all_buttons.forEach(b=>b.classList.remove('active'))
            but.classList.add('active')
        })
    })
})