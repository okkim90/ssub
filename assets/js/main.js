['DOMContentLoaded', 'resize'].forEach(event => window.addEventListener(event, function (ev) {
    const { innerHeight } = window;
    document.documentElement.style.setProperty("--app-height",`${innerHeight}px`);
}));


//pinch 진행 상태
let scaling  = false;
//pinch 초기 거리
let setDist = 0;


const zoom_box = document.querySelectorAll('.zoom_box');
zoom_box.forEach((e)=>{
    e.addEventListener('touchstart',(event)=>{
        if(event.originalEvent.touches.length  === 2){
            scaling  = true;
        }
    });

    e.addEventListener('touchmove',(event)=>{
        if(scaling){
            var dist = Math.hypot(
                event.originalEvent.touches[0].pageX - event.originalEvent.touches[1].pageX,
                event.originalEvent.touches[1].pageY - event.originalEvent.touches[1].pageY
            );
            dist = Math.floor(dist/20);
    
            if(setDist == 0) setDist = dist;
    
            if(setDist < dist){
                e.style.width = 1.1*parseFloat(imgWidth);
                e.style.height = 1.1*parseFloat(imgHeight);
                setDist = dist; 
            } else if(setDist > dist){
                e.style.width = 0.9*parseFloat(imgWidth);
                e.style.height = 0.9*parseFloat(imgHeight);
                setDist = dist;
            }
    
            imgWidth = e.clientWidth;
            imgHeight = e.clientHeight;
    
        }
    });

    e.addEventListener('touchend',()=>{
        scaling = false;
        setDist = 0;
    });
});

