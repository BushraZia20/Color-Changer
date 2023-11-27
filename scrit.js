const clickbtn = document.getElementById('clickbtn')
const mainDiv = document.getElementById('main')

clickbtn.addEventListener('click',function(){
    const changeCurrentColor = colorChange();
    mainDiv.style.backgroundColor = changeCurrentColor;
    document.getElementById('setCol').textContent = changeCurrentColor
})

function colorChange(){
    const num = '0123456789ABCDEF'
    let temp = '#'

    for(let i = 0; i < 6; i++){
        temp += num[Math.floor(Math.random()*17)]
    }
    return temp;
}



