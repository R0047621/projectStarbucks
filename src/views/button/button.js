let uls = document.querySelectorAll('.list>li>a');
console.log(uls);

for(let i=0;i<uls.length;i++) {
    uls[i].suoYin = i;
    uls[i].addEventListener('click',function(){
        for(let j=0;j<uls.length;j++) {
            uls[j].classList.remove('color');
        }
        this.classList.add('color');
    })
}
