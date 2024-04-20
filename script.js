//this is for first btn
const firstBtn = document.getElementById('first');
firstBtn.addEventListener('click', function(){
    const content = document.getElementById('first1');
    content.style.display = 'block';
    const content1 = document.getElementById('first2');
    content1.style.display = 'none';
    const content3 = document.getElementById('first3');
    content3.style.display = 'none';
})

//this is for second btn
const firstBtn1 = document.getElementById('second');
firstBtn1.addEventListener('click', function(){
    const content = document.getElementById('first2');
    content.style.display = 'block';
    const content1 = document.getElementById('first1');
    content1.style.display = 'none';
    const content3 = document.getElementById('first3');
    content3.style.display = 'none';
    
})
//this is for Third btn
const firstBtn3 = document.getElementById('third');
firstBtn3.addEventListener('click', function(){
    const content = document.getElementById('first2');
    content.style.display = 'none';
    const content1 = document.getElementById('first1');
    content1.style.display = 'none';
    const content3 = document.getElementById('first3');
    content3.style.display = 'block';
    
})
// fortfolio section


//this is for first btn
const Btn = document.getElementById('portBnt1');
Btn.addEventListener('click', function(){
    const content = document.getElementById('portfolio1');
    content.style.display = 'block';
    const content1 = document.getElementById('portfolio2');
    content1.style.display = 'none';
    const content3 = document.getElementById('portfolio3');
    content3.style.display = 'none';
})

//this is for second btn
const Btn1 = document.getElementById('portBnt2');
Btn1.addEventListener('click', function(){
    const content = document.getElementById('portfolio2');
    content.style.display = 'block';
    const content1 = document.getElementById('portfolio1');
    content1.style.display = 'none';
    const content3 = document.getElementById('portfolio3');
    content3.style.display = 'none';
    
})
//this is for Third btn
const Btn3 = document.getElementById('portBnt3');
Btn3.addEventListener('click', function(){
    const content = document.getElementById('portfolio2');
    content.style.display = 'none';
    const content1 = document.getElementById('portfolio1');
    content1.style.display = 'none';
    const content3 = document.getElementById('portfolio3');
    content3.style.display = 'block';
    
})


//this is for website menu


document.getElementById('menuAnchor1').addEventListener('click', function(){
    const content = document.getElementById('Services');
    content.style.display = 'block';
})


document.getElementById('menuAnchor2').addEventListener('click', function(){
    const porfolio = document.getElementById('portfolio');
    porfolio.style.display = 'block';
})