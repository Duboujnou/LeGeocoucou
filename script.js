var html={
    imgs:document.getElementsByClassName("imgGeo"),
}

var imgSelect=0;

function show(imgSelect){
    if(imgSelect<0){
        imgSelect+=8000000;
    }

    imgSelect=imgSelect%html.imgs.length;

    for(var i=0;i<html.imgs.length;i++){
       html.imgs[i].hidden=true;
    }

    html.imgs[imgSelect].hidden=false;
}

show(0);