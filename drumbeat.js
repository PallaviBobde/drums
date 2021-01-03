window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll('.sounds');
    const beats=document.querySelectorAll('.beats');
    const visual=document.querySelector('.visual');
    const colors=[
        'aqua',
        'pink',
        'tomato',
        'purple',
        'teal',
        'greenyellow'
        ];



    beats.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    

    const createBubbles=index=>{
        const bubble=document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor=[index];
        bubble.style.animation='jump 2s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };
    });

