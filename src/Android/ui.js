// new dlib app
const ui = new Dlib_Android();

// settings icon
const settings_button = ui.Android().Gbutton_type_4('<img src="icons/settings.png">', openSettings);
settings_button.render(document.getElementById("settings-icon"));
settings_button.height = '40px';
settings_button.width = '40px';
settings_button.ripple_background = 'rgba(0, 0, 0, 0.2)';


// settings close button
const settings_close_button = ui.Android().Gbutton_type_4('<p style="margin-left: 40%">Close</p>', closeSettings);
settings_close_button.render(document.getElementById('close-settings-button'));
settings_close_button.font_align = "center";


// new project
const new_project_button = ui.Android().Gbutton_type_3('+ New Project');
new_project_button.height = '200px';
new_project_button.width = '200px';
new_project_button.render(document.getElementById('new-project-rect'));