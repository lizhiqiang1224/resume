
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd:function (swiper) {
        var slideAry=swiper.slides;  /*所有的滑块*/
        var trueSlideNum=slideAry.length-2; /*真实的滑块的索引*/
        var lastNum=trueSlideNum+1; /*最后一个滑块的索引*/
        var curIn=swiper.activeIndex; /*获得当前滑块的索引*/
        [].forEach.call(slideAry,function (item,index) {
            item.id=null;
            if(curIn==index){
                /*第一张跟真实滑块最后一张是一样的，最后一张跟真实滑块的第一张是一样*/
                switch (curIn){
                    case 0:
                        item.id="page"+trueSlideNum;
                        break;
                    case lastNum:
                        item.id="page1";
                        break;
                    default:
                        item.id="page"+curIn;
                }
            }
        })
    }
});

~(function () {
    var music=document.querySelector(".music");
    var audicMusic=document.querySelector("#audioMusic");
    music.addEventListener('click',function () {
        if(audicMusic.paused){/*判断是否是停止*/
            audicMusic.play();
            music.className="music musicMove";
            return;
        }
        audicMusic.pause();
        music.className="music";
        music.style.opacity=1;
    });
    window.setTimeout(function () {
        audicMusic.play();/*播放*/
        /*边播放边缓存,触发事件canplay*/
        audicMusic.addEventListener("canplay",function () {
            music.className="music musicMove";
        })
    },1000)
})();
