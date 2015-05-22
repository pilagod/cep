$(function(){
    start();

}());

function start(){
    init();
    introduction(); //  7 secs
    setTimeout(function(){
        $("#typing")[0].volume = 0.1;
    }, 5800);
    setTimeout(character, 5800);
    setTimeout(motivation, 37000);
    setTimeout(conclusion, 64500);
    //conclusion();
    //motivation();
    //setTimeout(conclusion, 27500);
    //character()

}

function init(){
    $("#typing")[0].volume = 0.3;
}

/*******************************/
/*        Introduction         */
/*******************************/

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
                var strings = ["大家好～～～～～<br>我是來自<highlight>台大資管系碩士班一年級</highlight>的<highlight>何均晏</highlight>，<br><br>首先，<br>我要先介紹自己給你們認識：\）"];
                typeWords(object, strings);
                setTimeout(function(){
                    $("#typing")[0].pause();
                    // For Character
                    setTimeout(function(){
                        playTypingSound();
                    }, 400)
                }, 3400)
            }, 700)
        }, 700)
    }, 700);
}

/*******************************/
/*          Character          */
/*******************************/

function character(){
    $("#introduction span.typed-cursor").remove();
    $("#introduction").css("top", "-100%");
    $("#character").css("top", "0");

    // 6 secs
    setTimeout(function(){
        characterDescription();
    }, 1500);

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
                        // For Motivation
                        setTimeout(function(){
                            $("#typing")[0].play();
                        }, 2000);
                    }, 8000)
                }, 7500)
            }, 7000)
        }, 1000);
    }, 6700);
}

// 6 secs
function characterDescription(){
    var object = $("#character div.container-fluid>span");
    var strings = ["我用<highlight>三個特質</highlight>來形容自己："];
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
            "是目前<highlight>校內唯一會發光的車宣</highlight>。",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove();});

        $("#character div.row.project img").addClass("show-by-opacity");
        setTimeout(function(){
            $("#character div.row.project img").removeClass("show-by-opacity");
        }, 2500);
        setTimeout(function(){
            $("#character div.row.project img").addClass("show-by-opacity");
            $("#character div.row.project img").attr("src", "imgs/character_LCD2.jpg");
        }, 3500);

        setTimeout(function(){
            pauseTypingSound();
        }, 4425);

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
            "接觸過<highlight>軟硬整合的領域</highlight>，<br>" +
            "在思考、實作的過程中，<br>" +
            "能以<highlight>多元的角度綜觀全局</highlight>。 <br>" +
            "（影片是我以<highlight>手機控制攝影機</highlight>的行為)",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove(); pauseTypingSound();});

        $("#character div.row.project video").addClass("show-by-opacity");
        $("#character div.row.project video")[0].play();

        setTimeout(function(){
            pauseTypingSound();
        }, 4500);

        setTimeout(function(){
            $("#multithinking_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#multithinking_wrapper").removeClass("scale-big");
            $("#character div.row.project video").removeClass("show-by-opacity");
        }, 5500)
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
        "這是類似FB的網站作品，<br>" +
        "主要是為了<highlight>學習\"Node.js\"</highlight>，<br>" +
        "從<highlight>完全不會到完成</highlight>，總共花<highlight>一個禮拜</highlight>。<br>" +
        "(圖中是當初上線讓朋友登入留言的畫面)",
            ""
        ];
        typeWords(object, strings, function(){$("#character div.row.project span.typed-cursor").remove(); pauseTypingSound()});

        $("#character div.row.project img").attr("src", "imgs/character_fakebook.png");
        $("#character div.row.project img").css("padding-top", "0.5em");
        $("#character div.row.project img").addClass("show-by-opacity");

        setTimeout(function(){
            pauseTypingSound();
        }, 5000);

        setTimeout(function(){
            $("#action_wrapper").css({
                "bottom": "auto",
                "left": "auto"
            });
            $("#action_wrapper").removeClass("scale-big");
            $("#character div.row.project img").removeClass("show-by-opacity");
        }, 6000)
    }, 1000);
}

/*******************************/
/*          Motivation         */
/*******************************/

function motivation(){
    $("#character div.row.project").remove();

    $("#introduction").css("top", "-100%");
    $("#character").css("top", "-100%");
    $("#motivation").css("top", "0");

    setTimeout(function(){
        motivationDescription();
    }, 1500);

    setTimeout(function(){
        motivationSkill();
        setTimeout(function() {
            motivationCooperation();
            setTimeout(function(){
                motivationChange();
                setTimeout(function(){
                    motivationEnd();
                }, 7000)
            }, 9500)
        }, 6200)
    }, 2500);

}

function motivationDescription(){
    var object = $("#motivation div.container-fluid>span");
    var strings = ["創創必須錄取我的理由："];
    typeWords(object, strings, function(){removeCursor(); pauseTypingSound();});
}

function motivationSkill(){
    //$("#skill").addClass("show-by-opacity");
    $("#motivation div.row.description>div:first-child").addClass("show-by-opacity");
    var object = $("#skill ~ span");
    var strings = ["擁有技術開發的實作能力"];
    typeWords(object, strings, removeCursor);

    setTimeout(function(){
        playTypingSound();
    }, 200);
    setTimeout(function(){
        object = $("#content_skill");
        strings = ["<highlight>網頁</highlight>、<highlight>App</highlight>、<highlight>硬體</highlight>實作經驗，<br>" +
            "以及<highlight>三次實習</highlight>、<highlight>獨立接案</highlight>的經歷，<br>" +
            "加上<highlight>快速學習的能力</highlight>，<br>" +
            "搭配<highlight>創創提供的豐富資源</highlight>，<br>" +
            "絕對能<highlight>產生很多驚艷的火花</highlight>。",
            ""
        ];
        typeWords(object, strings, removeCursor);
        setTimeout(function(){
            pauseTypingSound();
        }, 4200);
        setTimeout(function(){
            $("#motivation div.row.description>div:first-child").removeClass("show-by-opacity");
        }, 4800)
    }, 1300);

    var i = 0;
    setTimeout(function(){
        var timeInterval = setInterval(function(){
            $("#motivation div.skills>img:nth-child(" + (i+1) + ")").addClass("show-by-opacity");
            i++;
            if(i == 5){
                clearInterval(timeInterval);
            }
        }, 700);
    }, 700);

    setTimeout(function(){
        for(i=0; i<5; i++)
            $("#motivation div.skills>img:nth-child(" + (i+1) + ")").removeClass("show-by-opacity");
    }, 5800);
}

function motivationCooperation(){
    $("#motivation div.row.description>div:nth-child(2)").addClass("show-by-opacity");
    var object = $("#cooperation ~ span");
    var strings = ["擁有豐富的跨領域合作經驗"];
    typeWords(object, strings, removeCursor);

    setTimeout(function(){
        playTypingSound();
    }, 200);
    setTimeout(function(){
        object = $("#content_cooperation");
        strings = ["在<highlight>HackNTU</highlight>與<highlight>九個部門</highlight>密切合作；<br>" +
        "在<highlight>InfoPlat</highlight>執行<highlight>跨領域合作專案</highlight>；<br>" +
        "與<highlight>國企</highlight>、<highlight>經濟系夥伴</highlight>參與<highlight>2015ATCC</highlight>；<br>" +
        "...<br>" +
        "這些經驗<br>" +
        "讓我的<highlight>想法</highlight>、<highlight>能力</highlight>更加<highlight>多元豐富</highlight>，<br>" +
        "在<highlight>創創</highlight>裡與<highlight>不同領域的人合作</highlight>，<br>" +
        "一定會創造出很有<highlight>價值的成果</highlight>。",
            ""
        ];
        typeWords(object, strings, removeCursor);

        setTimeout(function(){
            pauseTypingSound();
        }, 7100);
        setTimeout(function(){
            $("#motivation div.row.description>div:nth-child(2)").removeClass("show-by-opacity");
        }, 8200)
    }, 1300);

    var i = 0;
    setTimeout(function(){
        var timeInterval = setInterval(function(){
            $("#motivation div.cooperation>img:nth-child(" + (i+1) + ")").addClass("show-by-opacity");
            i++;
            if(i == 5){
                clearInterval(timeInterval);
            }
        }, 800);
    }, 800);

    setTimeout(function(){
        for(i=0; i<5; i++)
            $("#motivation div.cooperation>img:nth-child(" + (i+1) + ")").removeClass("show-by-opacity");
    }, 9000);
}

function motivationChange(){
    $("#motivation div.row.description>div:nth-child(3)").addClass("show-by-opacity");
    var object = $("#change ~ span");
    var strings = ["渴望「讓世界更好」的心"];
    typeWords(object, strings, removeCursor);

    setTimeout(function(){
        playTypingSound();
    }, 200);
    setTimeout(function(){
        object = $("#content_change");
        strings = ["我希望<highlight>這個社會</highlight>，<br>" +
        "能<highlight>因為我更好</highlight>； ^200 <br><br>" +
        "我希望<highlight>這個世界</highlight>，<br>" +
        "能<highlight>因為我而有所不同</highlight>； ^200 <br><br>" +
        "我想<highlight>加入創創</highlight>，<br>" +
        "挖掘<highlight>不平凡的契機</highlight>。",
            ""
        ];
        typeWords(object, strings, removeCursor);
        setTimeout(function(){
            pauseTypingSound();
        }, 4500);
    }, 1300);

    setTimeout(function(){
        $("#motivation div.change>img:nth-child(1)").addClass("show-by-opacity");
        setTimeout(function(){
            $("#motivation div.change>img:nth-child(1)").removeClass("show-by-opacity");
        }, 4500)
    }, 1500);
}

function motivationEnd(){
    $("#motivation div.row.description>div:nth-child(1)").addClass("show-by-opacity");
    $("#motivation div.row.description>div:nth-child(2)").addClass("show-by-opacity");
    setTimeout(function(){
        $("#motivation span:first-of-type").css("bottom", "-19em");
        $("#motivation div.row.description").css("bottom", "-19em");

    }, 1000);
}

/*******************************/
/*          Conclusion         */
/*******************************/

function conclusion(){
    $("#motivation div.imgs").remove();
    $("#motivation div.row.content").remove();

    $("#character").css("top", "0");
    $("#character div.container-fluid>span:first-of-type").addClass("hide-by-opacity");
    $("#motivation div.container-fluid>span:first-of-type").addClass("hide-by-opacity");

    setTimeout(function(){
        $("#character div.row.description").css("margin-top", "-3em");
        $("#character div.row.description").addClass("scale-small");
        $("#motivation div.row.description").addClass("scale-small");

        setTimeout(function(){
            $("#character div.slogan").append("<div>我是<highlight>何均晏</highlight></div>");
            $("#character div.slogan").append("<div>來自<highlight>台大資管系</highlight></div>");
            $("#character div.slogan").append("<div>我想<highlight>加入創創</highlight></div>");
            $("#character div.slogan").append("<div>結識<highlight>志同道合的夥伴</highlight></div>");
            $("#character div.slogan").append("<div>善用<highlight>創創提供的資源</highlight></div>");
            $("#character div.slogan").append("<div>打造一個</div>");
            $("#character div.slogan").append("<div><highlight>更好的世界</highlight></div>");

            var i = 0;
            var showInterval = setInterval(function(){
                $("#character div.slogan>div:nth-child(" + (i+1) +")").addClass("show-by-opacity");
                i ++;
                if(i >= 7){
                    clearInterval(showInterval);
                }
            }, 100);
        }, 1500);
    }, 1500);

}

function typeWords(object, strings, callback){
    object.typed({
        strings: strings,
        contentType: 'html',
        typeSpeed: 20,
        // backspacing speed
        backSpeed: -30,
        showCursor: true,
        cursorChar: "⎮",
        callback: callback
    })
}

function removeCursor(){
    $("span.typed-cursor").remove();
}

function playTypingSound(){
    setTimeout(function(){
        $("#typing")[0].play();
    }, 600);
    console.log("play");
}

function pauseTypingSound(){
    $("#typing")[0].pause();
}