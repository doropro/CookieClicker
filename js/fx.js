var coinImage = new Image();
coinImage.src = "img/flames.png";

function sprite (options) {

    var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
}

var canvas = document.getElementById("coinAnimation");
canvas.width = 600;
canvas.height = 600;

var coin = sprite({
    context: canvas.getContext("2d"),
    width: 138,
    height: 282,
    image: coinImage
});

function sprite (options) {

    that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width,
           that.height);
    };

}

coin.render();
