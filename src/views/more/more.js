import '@/views/more/more.css';

let svgNode = document.querySelector('.icon');
console.log(svgNode);

svgNode.addEventListener('click',function(){
    window.history.go(-1);
})