

function filter(imageObject, filterName){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var width = imageObject.width;
    var height = imageObject.height;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(imageObject, 0, 0);

    var imagePixels = ctx.getImageData(0, 0, width, height);

    if(filterName == "inverse"){
        for(var i=0; i < imagePixels.data.length; i += 4){ //we load every 4 pixels due to the amount of pixels in the image.
            //simple calculation: subtract pixel value from max (255)
            imagePixels.data[i] = 255 - imagePixels.data[i]; //red
            imagePixels.data[i+1] = 255 - imagePixels.data[i+1]; //green
            imagePixels.data[i+2] = 255 - imagePixels.data[i+2]; //blue
        }
    }
    
    if(filterName == "grayScale"){
        for(var i=0; i < imagePixels.data.length; i += 4){
            //simple calculation: take the average of rgb
            var avg = (imagePixels.data[i] + imagePixels.data[i + 1] + imagePixels.data[i + 2]) / 3;
            imagePixels.data[i]     = avg; // red
            imagePixels.data[i + 1] = avg; // green
            imagePixels.data[i + 2] = avg; // blue
        }
    }

    if(filterName == "custom"){
        for(var i=0; i < imagePixels.data.length; i += 1){
            //Increase brightness
            imagePixels.data[i]     = imagePixels.data[i]*2; // red
            imagePixels.data[i + 1] = imagePixels.data[i+ 1]*2; // green
            imagePixels.data[i + 2] = imagePixels.data[i + 2]/2; // blue
        }
    }

    ctx.putImageData(imagePixels, 0, 0);

    return canvas.toDataURL();

}

function inverse(){
    var imageObject = document.getElementById("inverse");
    imageObject.src = filter(imageObject, "inverse");
}
function grayScale(){
    var imageObject = document.getElementById("grayScale");
    imageObject.src = filter(imageObject, "grayScale");
}

function custom(){
    var imageObject = document.getElementById("custom");
    imageObject.src = filter(imageObject, "custom");
}

function restore(){
    imageObject.src = "img/filter.jpg";
    
}
