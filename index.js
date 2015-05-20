$(function(){
    start();

}());

function start(){
    introduction(); //  7 secs
    setTimeout(character, 5800);
    //character();
}

function introduction(){
    setTimeout(function(){
        //$("#me").css("opacity", "1");
        $("#me").addClass("show-by-opacity");
        setTimeout(function(){
            $("#me").css("padding-top", "5%");
            setTimeout(function(){
                $("#typing")[0].play();
            }, 300);
            //playTypingSound();
            setTimeout(function(){
                var object = $("#introduction span");
                var strings = ["大家好～～～～～<br>我是來自台大資管系碩士班一年級的何均晏，<br><br>首先，<br>我要先介紹自己給你們認識：\）"];
                typeWords(object, strings);
                setTimeout(function(){
                    $("#typing")[0].pause();
                    setTimeout(function(){
                        playTypingSound();
                    }, 400)
                }, 3400)
            }, 700)
        }, 700)
    }, 700);
}

function character(){
    $("#introduction span.typed-cursor").remove();
    $("#introduction").css("top", "-100%");
    $("#character").css("top", "0");

    // 6 secs
    characterDescription();

    // 20secs
    setTimeout(function(){
        $("#character div.container-fluid>span").css("margin-top", "3%");
        $("#character div.row.description").css("margin-top", "-5%");
        $("#character div.row.description").addClass("scale-small");

        setTimeout(function(){
            //projectFB();
            projectBreakBox();
            setTimeout(function(){
                projectEmbedded();
                setTimeout(function(){
                    projectFB();
                    setTimeout(function(){
                        $("#character div.row.description").css("margin-top", "1em");
                        $("#character div.row.description").removeClass("scale-small");
                    }, 8000)
                }, 7500)
            }, 7000)
        }, 1000);
    }, 6700);
}

// 6 secs
function characterDescription(){
    setTimeout(function(){
        var object = $("#character div.container-fluid>span");
        var strings = ["我用三個特質來形容自己："];
        typeWords(object, strings, function(){$("#character span.typed-cursor").remove(); pauseTypingSound();});

        setTimeout(function(){
            $("#breakbox").addClass("show-by-scale");
            playTypingSound();
            setTimeout(function(){
                object = $("#breakbox ~ span");
                strings = ["跳脫框架的思考"];
                typeWords(object, strings, function(){$("#breakbox ~ span.typed-cursor").remove(); pauseTypingSound();});
                setTimeout(function(){
                    $("#multithinking").addClass("show-by-scale");
                    playTypingSound();
                    setTimeout(function(){
                        object = $("#multithinking ~ span");
                        strings = ["跨領域的思維"];
                        typeWords(object, strings, function(){$("#multithinking ~ span.typed-cursor").remove(); pauseTypingSound();});
                        setTimeout(function(){
                            $("#action").addClass("show-by-scale");
                            playTypingSound();
                            setTimeout(function(){
                                object = $("#action ~ span");
                                strings = ["動手做的精神"];
                                typeWords(object, strings, function(){$("#action ~ span.typed-cursor").remove(); pauseTypingSound();});
                            }, 1000)
                        }, 350)
                    }, 1000)
                }, 350)
            }, 1000)
        }, 1000);
    }, 1500);
}

// 8 sec
function projectBreakBox(){
    $("#breakbox_wrapper").css({
        "bottom": "-35em",
        "left": "-23em"
    });
    $("#breakbox_wrapper").addClass("scale-big");

    playTypingSound();
    setTimeout(function(){
        var object = $("#character div.row.project span.breakbox");
        var strings = [" <h3>HackLCD專案</h3><br>" +
            "不受到傳統白紙黑字的車宣侷限，<br>" +
            "HackLCD是我在HackNTU裡完成的專案，<br>" +
            "是目前校內唯一會發光的車宣。",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove();});

        $("#character div.row.project img").addClass("show-by-opacity");
        setTimeout(function(){
            $("#character div.row.project img").removeClass("show-by-opacity");
        }, 2500);
        setTimeout(function(){
            $("#character div.row.project img").addClass("show-by-opacity");
            $("#character div.row.project img").attr("src", "imgs/LCD2.jpg");
        }, 3500);

        setTimeout(function(){
            pauseTypingSound();
        }, 4725);

        setTimeout(function(){
            $("#breakbox_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#breakbox_wrapper").removeClass("scale-big");
            $("#character div.row.project img").removeClass("show-by-opacity");
        }, 5500)
    }, 1000);
}

function projectEmbedded(){
    $("#multithinking_wrapper").css({
        "bottom": "-35em",
        "left": "-38em"
    });
    $("#multithinking_wrapper").addClass("scale-big");

    playTypingSound();
    setTimeout(function(){
        var object = $("#character div.row.project span.multithinking");
        var strings = [" <h3>嵌入式系統專案</h3><br>" +
            "接觸過軟體以及硬體的領域，<br>" +
            "在思考、實作的過程中，<br>" +
            "能以更多元的角度綜觀全局。 <br>" +
            "（影片是我以手機控制攝影機的行為)",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove(); pauseTypingSound();});

        $("#character div.row.project video").addClass("show-by-opacity");
        $("#character div.row.project video")[0].play();

        setTimeout(function(){
            pauseTypingSound();
        }, 4800);

        setTimeout(function(){
            $("#multithinking_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#multithinking_wrapper").removeClass("scale-big");
            $("#character div.row.project video").removeClass("show-by-opacity");
        }, 6000)
    }, 1000);
}

function projectFB(){
    $("#action_wrapper").css({
        "bottom": "-35em",
        "left": "-53em"
    });
    $("#action_wrapper").addClass("scale-big");

    playTypingSound();
    setTimeout(function(){
        var object = $("#character div.row.project span.action");
        var strings = [" <h3>Fakebook</h3><br>" +
        "這個作品是做好玩的，<br>" +
        "主要是為了學習\"Node.js\"，<br>" +
        "從完全不會到完成，總共花了一個禮拜。<br>" +
        "(圖中是當初上線讓朋友登入留言的畫面)",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove(); pauseTypingSound()});

        $("#character div.row.project img").attr("src", "imgs/fakebook.png");
        $("#character div.row.project img").css("padding-top", "0.5em");
        $("#character div.row.project img").addClass("show-by-opacity");

        setTimeout(function(){
            pauseTypingSound();
        }, 5300);

        setTimeout(function(){
            $("#action_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#action_wrapper").removeClass("scale-big");
            $("#character div.row.project img").removeClass("show-by-opacity");
        }, 7000)
    }, 1000);
}

function motivation(){
    $("#character").css("top", "-100%");
    $("#motivation").css("top", "0");
}

function typeWords(object, strings, callback){
    object.typed({
        strings: strings,
        contentType: 'html',
        typeSpeed: 25,
        // backspacing speed
        backSpeed: -20,
        showCursor: true,
        cursorChar: "⎮",
        callback: callback
    })
}

function playTypingSound(){
    setTimeout(function(){
        $("#typing")[0].play();
    }, 600);
}

function pauseTypingSound(){
    $("#typing")[0].pause();
}