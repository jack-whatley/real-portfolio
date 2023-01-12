const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).ready(() => {
    let split = getRandom(0, 2);
    if (split === 1) {
        $("#left-div").append("<div class='Home_circle__nNb5i Home_leftAnimation__Eki2_' id='1'></div>");
        $("#1").css({"top": `${getRandom(30, 45)}%`, "left": `${getRandom(20, 80)}%`});
        $("#left-div").append("<div class='Home_circle__nNb5i Home_leftAnimation__Eki2_' id='2'></div>");
        $("#2").css({"top": `${getRandom(45, 60)}%`, "left": `${getRandom(20, 80)}%`});
        $("#right-div").append("<div class='Home_circle__nNb5i Home_rightAnimation___Jf8q' id='3'></div>");
        $("#3").css({"top": `${getRandom(30, 60)}%`, "left": `${getRandom(20, 80)}%`});

    } else {
        $("#left-div").append("<div class='Home_circle__nNb5i Home_leftAnimation__Eki2_' id='1'></div>");
        $("#1").css({"top": `${getRandom(30, 60)}%`, "left": `${getRandom(20, 80)}%`});
        $("#right-div").append("<div class='Home_circle__nNb5i Home_rightAnimation___Jf8q' id='2'></div>");
        $("#2").css({"top": `${getRandom(30, 45)}%`, "left": `${getRandom(20, 80)}%`});
        $("#right-div").append("<div class='Home_circle__nNb5i Home_rightAnimation___Jf8q' id='3'></div>");
        $("#3").css({"top": `${getRandom(45, 60)}%`, "left": `${getRandom(20, 80)}%`});

    }

});