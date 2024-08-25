// get image
var img = document.getElementById("img");
var current_layer = "";

 // layer selection
 function set_layer_1(){
    img = document.getElementById("layer-1");
    current_layer = "layer 1";
}

function set_layer_2(){
    img = document.getElementById("layer-2");
    current_layer = "layer 2";

}

function set_layer_3(){
    img = document.getElementById("layer-3");
    current_layer = "layer 3";
}

function set_layer_main(){
    img = document.getElementById("img");
    current_layer = "layer main (4)";
}

var style_build = "filter: ";

function contrast(value){
    style_build += `contrast(${value}%) `;
    img.style = style_build;
    console.log(style_build);
}

function brightness(value){
    style_build += `brightness(${value}%) `;
    img.style = style_build;
    console.log(style_build)
}

function grayscale(value){
    style_build += `grayscale(${value}%) `
    img.style = style_build;
}

function invert(value){
    style_build += `invert(${value}%) `;
    img.style = style_build;
}

function opacity(value){
    style_build += `opacity(${value}%) `;
    img.style = style_build;
}

function saturate(value){
    style_build += `saturate(${value}%) `;
    img.style = style_build;
}

function sepia(value){
    style_build += `sepia(${value}%) `;
    img.style = style_build;
}

function none(){
    img.style.filter = 'none';
    style_build = "filter: ";
}

function blur(value){
    style_build += `blur(${value}px) `;
    img.style = style_build;
}

function hue_rotate(value){
    style_build += `hue-rotate(${value}deg) `;
    img.style = style_build;
}

var exported = false;

function config(){
    alert(`
        NAIFS - Project Config
        
        --------------------------

        Slip provided by NAIFS

        --------------------------

        name: NAIFS Image
        version: GLOBAL-NAIFS
        type: IMAGE-NAIFS-1-0

        image.json:
            canvas res: 300,
            widget: naifs-widgets
            layers: 4
            curent layer: ${current_layer}
            source: blob
            host: local
            exported: ${exported}

        Copyright (c) NAIFS 2024
        OpenSource Community

    `);
}
