// settings
// const settings_icon = document.getElementById("settings-icon");
// const settings_close_button = document.getElementById('close-settings-button');
const settings_panel = document.getElementById('settings');

function openSettings(){
    settings_panel.style.height = '100px';
    settings_panel.style.opacity = 1;
}

function closeSettings(){
    settings_panel.style.height = '0px';
    settings_panel.style.opacity = 0;
}


closeSettings();


// document.getElementById("new-project-rect").addEventListener('click', function(){
//     document.getElementById('img-upl').click();
// })


// function load_Editor(url){
//     var iframe = document.createElement("iframe");
//     iframe.src = "editor.html";
//     iframe.frameBorder = "0";
//     iframe.style.width = "100%";
//     iframe.style.height = "100vh";
//     document.getElementById('area').innerHTML = "";
//     document.getElementById('area').appendChild(iframe);

//     console.log(iframe.contentDocument.document)
// }

// document.getElementById('img-upl').addEventListener('change', ()=>{
//     var url = URL.createObjectURL(document.getElementById('img-upl').files[0]);
//     load_Editor(url)
// })