$(function(){
    start();

}());

function start(){
    //introduction(); //  7 secs
    //setTimeout(character, 5800);
    character();
}

function introduction(){
    setTimeout(function(){
        //$("#me").css("opacity", "1");
        $("#me").addClass("show-by-opacity");
        setTimeout(function(){
            $("#me").css("padding-top", "5%");
            setTimeout(function(){
                $("#typing")[0].play();
            }, 700);
            setTimeout(function(){
                var object = $("#introduction span");
                var strings = ["大家好～～～～～<br>我是來自台大資管系碩士班一年級的何均晏，<br><br>首先，<br>我要先介紹自己給你們認識：\）"];
                typeWords(object, strings);
                setTimeout(function(){
                    $("#typing")[0].pause();
                }, 3600)
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
        $("#character div.container-fluid>span").css("margin-top", "5%");
        $("#character div.row.description").css("margin-top", "-5%");
        $("#character div.row.description").addClass("scale-small");

        setTimeout(function(){
            projectBreakBox();
            setTimeout(function(){
                projectEmbedded();
            }, 8000)
        }, 1000);
    }, 7500);
}

// 6 secs
function characterDescription(){
    setTimeout(function(){
        var object = $("#character div.container-fluid>span");
        var strings = ["我用三個特質來形容自己："];
        $("#typing")[0].play();
        typeWords(object, strings, function(){$("#character span.typed-cursor").remove(); $("#typing")[0].pause();});

        setTimeout(function(){
            $("#breakbox").addClass("show-by-scale");
            setTimeout(function(){
                object = $("#breakbox ~ span");
                strings = ["跳脫框架的思考"];
                typeWords(object, strings, function(){$("#breakbox ~ span.typed-cursor").remove();});
                setTimeout(function(){
                    $("#multithinking").addClass("show-by-scale");
                    setTimeout(function(){
                        object = $("#multithinking ~ span");
                        strings = ["跨領域的思維"];
                        typeWords(object, strings, function(){$("#multithinking ~ span.typed-cursor").remove();});
                        setTimeout(function(){
                            $("#action").addClass("show-by-scale");
                            setTimeout(function(){
                                object = $("#action ~ span");
                                strings = ["動手做的精神"];
                                typeWords(object, strings, function(){$("#action ~ span.typed-cursor").remove();});
                            }, 1000)
                        }, 500)
                    }, 1000)
                }, 500)
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

    setTimeout(function(){
        var object = $("#character div.row.project span.breakbox");
        var strings = [" <h3>HackLCD專案</h3><br>" +
            "不受到傳統白紙黑字的車宣侷限，<br>" +
            "HackLCD是我在HackNTU裡完成的專案，<br>" +
            "是目前校內唯一會發光的車宣。 ^100",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove()});

        $("#character div.row.project img").addClass("show-by-opacity");
        setTimeout(function(){
            $("#character div.row.project img").removeClass("show-by-opacity");
        }, 2500);
        setTimeout(function(){
            $("#character div.row.project img").addClass("show-by-opacity");
            $("#character div.row.project img").attr("src", "imgs/LCD2.jpg");
        }, 3500);

        setTimeout(function(){
            $("#breakbox_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#breakbox_wrapper").removeClass("scale-big");
            $("#character div.row.project img").removeClass("show-by-opacity");
        }, 6000)
    }, 1000);
}

function projectEmbedded(){
    $("#multithinking_wrapper").css({
        "bottom": "-35em",
        "left": "-38em"
    });
    $("#multithinking_wrapper").addClass("scale-big");

    setTimeout(function(){
        var object = $("#character div.row.project span.multithinking");
        var strings = [" <h3>嵌入式系統專案</h3><br>" +
            "接觸過軟體以及硬體的領域，<br>" +
            "在思考、實作的過程中，<br>" +
            "能以更多元的角度綜觀全局。 <br>" +
            "（影片是我以手機控制攝影機的行為）^1500",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove()});

        $("#character div.row.project video").addClass("show-by-opacity");
        $("#character div.row.project video")[0].play();

        setTimeout(function(){
            $("#multithinking_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#multithinking_wrapper").removeClass("scale-big");
            $("#character div.row.project video").removeClass("show-by-opacity");
        }, 7000)
    }, 1000);
}

function projectFB(){
    $("#multithinking_wrapper").css({
        "bottom": "-35em",
        "left": "-38em"
    });
    $("#multithinking_wrapper").addClass("scale-big");

    setTimeout(function(){
        var object = $("#character div.row.project span.multithinking");
        var strings = [" <h3>嵌入式系統專案</h3><br>" +
        "接觸過軟體以及硬體的領域，<br>" +
        "在思考、實作的過程中，<br>" +
        "能以更多元的角度綜觀全局。 <br>" +
        "（影片是我以手機控制攝影機的行為）^1500",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove()});

        $("#character div.row.project video").addClass("show-by-opacity");
        $("#character div.row.project video")[0].play();

        setTimeout(function(){
            $("#multithinking_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#multithinking_wrapper").removeClass("scale-big");
            $("#character div.row.project video").removeClass("show-by-opacity");
        }, 8000)
    }, 1000);
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