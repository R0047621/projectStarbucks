import "./account.less"
import "./vue"
import "./account"

const iconfont = document.querySelector('.iconfont')
const password = document.querySelector('.password>input')
const provingHeader1 = document.querySelector('.provingHeader1')
const provingHeader2 = document.querySelector('.provingHeader2')
const Slider = document.querySelector('.Slider')
const imgSlider = document.querySelector('.imgSlider')
const proving = document.querySelector('.proving')
const proving2 = document.querySelector('.proving2')
const spans = document.querySelectorAll('.loginP>span')
const inputs = document.querySelectorAll('input')
const join = document.querySelector('.join')

let ok=false;
looks();
iconfont.addEventListener('click',()=>{
    ok=!ok
    if(ok){
        iconfont.innerHTML='&#xebcd;'
        password.type = 'password'
    }else{
        iconfont.innerHTML='&#xebcc;'
        password.type = 'text'
    }
})

var startX = 0; // 初始位置
var endX = 0; // 结束位置

Slider.addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX; // 记录起始位置
})

Slider.addEventListener('touchmove', function(e) {
    e.preventDefault(); // 阻止页面滚动
    endX = e.touches[0].pageX; // 记录结束位置
    console.log('translateX(' + (endX - startX) + 'px)')
    if((endX - startX)<=-30){
        Slider.style.transform = 'translateX(-30px)'; // 移动元素
        imgSlider.style.transform = 'translateX(-30px)';
    }else if((endX - startX)>=280){
        Slider.style.transform = 'translateX(280px)'; // 移动元素
        imgSlider.style.transform = 'translateX(280px)';
    }else{
        Slider.style.transform = 'translateX(' + (endX - startX) + 'px)'; // 移动元素
        imgSlider.style.transform = 'translateX(' + (endX - startX) + 'px)';
    }
})

Slider.addEventListener('touchend', function(e) {
    console.log((endX - startX)/window.innerWidth);
    let move1=(endX - startX)/window.innerWidth*100
    console.log(typeof move1)
    if(move1<=52&&move1>=49.5){
        console.log(11111)
        proving.style.display='none'
        proving2.style.display='flex' 
    }else{
        console.log(2222)
        provingHeader1.style.display='none'
        provingHeader2.style.display='block'
        Slider.style.transform = 'translateX(0)'; // 回到原点
        imgSlider.style.transform = 'translateX(0)'; // 回到原点
        setTimeout(looks, 1000);
    }  
})


inputs[0].addEventListener("focus",()=>{
    spans[0].style.top='0'
    inputs[0].style.borderBottom=".5vw solid #24c00f";
    inputs[1].style.borderBottom="none";
})
inputs[1].addEventListener("focus",()=>{
    spans[1].style.top='0'
    inputs[0].style.borderBottom="none";
    inputs[1].style.borderBottom=".5vw solid #24c00f";
})
inputs[0].addEventListener("blur",()=>{
    if(inputs[0].value.trim() === ""){
        spans[0].style.top='6vw'
    }
    
})
inputs[1].addEventListener("blur",()=>{
    if(inputs[1].value.trim() === ""){
        spans[1].style.top='6vw'
    }
})


function looks(){
    provingHeader1.style.display='flex'
    provingHeader2.style.display='none'
}

join.addEventListener('click',()=>{
    console.log("测试登录")
    }   
)