FastClick.attach(document.body);
~function () {
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW,
        oMain = document.querySelector('.main');
    if (winW > desW) {
        oMain.style.margin = '0 auto';
        oMain.style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}();
var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlideChangeEnd: function (swiper) {
        var slideAry = swiper.slides;
        var trueSlideNum = slideAry.length - 2;
        var lastNum = trueSlideNum + 1;
        var curIn = swiper.activeIndex;
        [].forEach.call(slideAry, function (item, index) {
            item.id = null;
            if (curIn == index) {
                switch (curIn) {
                    case 0 :
                        item.id = "page" + trueSlideNum;
                        break;
                    case lastNum :
                        item.id = "page1";
                        break;
                    default :
                        item.id = "page" + curIn;

                }
            }

        })

    }
});


~(function () {
    var music = document.querySelector(".music");
    var audioMusic = document.querySelector("#audioMusic");
    music.addEventListener("click", function () {
        if (audioMusic.paused) {
            audioMusic.play();
            music.className = "music musicMove";
            return;
        }
        audioMusic.pause();
        music.className = "music";
        music.style.opacity = 1;
    });
    window.setTimeout(function () {
        audioMusic.play();
        audioMusic.addEventListener("canplay", function () {
            music.className = "music musicMove";
        })
    }, 1000)


})()