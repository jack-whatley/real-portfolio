const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

$(document).ready(() => {
    let split = getRandom(1, 2);
    if (split === 1) {
        $("#left-div").append("<div class='Home_circle__nNb5i'></div>").css({"background": `linear-gradient(${getRandom(1,360)}}, rgba(255,217,0,1) 0%, rgba(255,0,0,1) 100%)`}, {"top": `${getRandom(25, 65)}%`}, {"left": `${getRandom(20, 80)}%`});
        $("#left-div").append("<div class='Home_circle__nNb5i'></div>").css({"background": `linear-gradient(${getRandom(1,360)}}, rgba(255,217,0,1) 0%, rgba(255,0,0,1) 100%)`}, {"top": `${getRandom(25, 65)}%`}, {"left": `${getRandom(20, 80)}%`});
        $("#right-div").append("<div class='Home_circle__nNb5i'></div>").css({"background": `linear-gradient(${getRandom(1,360)}}, rgba(255,217,0,1) 0%, rgba(255,0,0,1) 100%)`}, {"top": `${getRandom(25, 65)}%`}, {"left": `${getRandom(20, 80)}%`});

    } else {
        $("#left-div").append("<div class='Home_circle__nNb5i'></div>").css({"background": `linear-gradient(${getRandom(1,360)}}, rgba(255,217,0,1) 0%, rgba(255,0,0,1) 100%)`}, {"top": `${getRandom(25, 65)}%`}, {"left": `${getRandom(20, 80)}%`});
        $("#right-div").append("<div class='Home_circle__nNb5i'></div>").css({"background": `linear-gradient(${getRandom(1,360)}}, rgba(255,217,0,1) 0%, rgba(255,0,0,1) 100%)`}, {"top": `${getRandom(25, 65)}%`}, {"left": `${getRandom(20, 80)}%`});
        $("#right-div").append("<div class='Home_circle__nNb5i'></div>").css({"background": `linear-gradient(${getRandom(1,360)}}, rgba(255,217,0,1) 0%, rgba(255,0,0,1) 100%)`}, {"top": `${getRandom(25, 65)}%`}, {"left": `${getRandom(20, 80)}%`});

    }

});