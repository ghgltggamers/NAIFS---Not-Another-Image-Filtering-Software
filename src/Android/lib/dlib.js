/*
  DLIB-Android : DMAT library for Android UI Designing with js
  Copyright (c) DMAT
  Written by ghgltggamer officially
  
  License : MIT LICENSEE
*/

var dlib_android_cache_ripple;
class Dlib_Android {
  Android() {
    return {
      Gbutton(label, onclick) {
        // Ripple effect CSS
        const style = document.createElement('style');
        style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
          button {
            -webkit-tap-highlight-color: transparent;
          }
        `;
        document.head.appendChild(style);
        var uuid = crypto.randomUUID();
        var buttonParams = {
          height: '37px',
          width: '85px',
          background: '#1A73E9',
          color: 'white',
          font: 'arial',
          font_size: '14px',
          border_radius: '5px',
          ripple_background: 'rgba(0,0,0,0.1)',
          get_root: uuid,
          render(area) {
            var btn = document.createElement('button');
            dlib_android_cache_ripple = this.ripple_background;
            btn.innerHTML = label;
            btn.style.height = this.height;
            btn.style.width = this.width;
            btn.style.background = this.background;
            btn.style.fontSize = this.font_size;
            btn.style.color = this.color;
            btn.style.fontFamily = this.font;
            btn.style.borderRadius = this.border_radius;
            btn.style.border = 'none';
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.style.cursor = 'pointer';
            btn.style.userSelect = 'none';

            function createRipple(event) {
              const ripple = document.createElement('span');
              ripple.style.width = ripple.style.height = '100px';
              ripple.style.background = buttonParams.ripple_background;
              ripple.style.position = 'absolute';
              ripple.style.borderRadius = '50%';
              ripple.style.transform = 'scale(0)';
              ripple.style.transition = 'transform 0.6s linear, opacity 0.6s linear';
              ripple.style.pointerEvents = 'none';
              ripple.style.boxShadow = `0 0 20px 10px ${dlib_android_cache_ripple}`; // Softer border

              const rect = btn.getBoundingClientRect();
              ripple.style.left = `${event.clientX - rect.left - 50}px`;
              ripple.style.top = `${event.clientY - rect.top - 50}px`;

              btn.appendChild(ripple);

              setTimeout(() => {
                ripple.style.transform = 'scale(4)';
              }, 0);

              return ripple;
            }

            let activeRipple = null;

            function onMouseDown(event) {
              activeRipple = createRipple(event);
            }

            function onMouseUp() {
              if (activeRipple) {
                activeRipple.style.opacity = '0';
                setTimeout(() => {
                  if (activeRipple) {
                    activeRipple.remove();
                    activeRipple = null;
                  }
                }, 600);
              }
            }

            btn.addEventListener('mousedown', onMouseDown);
            btn.addEventListener('mouseup', onMouseUp);
            btn.addEventListener('mouseleave', onMouseUp);
            btn.addEventListener('touchstart', function(event) {
              activeRipple = createRipple(event.touches[0]);
            });
            btn.addEventListener('touchend', onMouseUp);
            btn.addEventListener('touchcancel', onMouseUp);

            btn.addEventListener('click', function() {
              if (typeof onclick === 'function') {
                onclick();
              }
            });

            area.appendChild(btn);
          }
        };

        return buttonParams;
      },
      
      
      
      
      
      Gbutton_type_2(label, onclick) {
  // Ripple effect CSS
  const style = document.createElement('style');
  style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
          button {
            -webkit-tap-highlight-color: transparent;
          }
        `;
  document.head.appendChild(style);
  var uuid = crypto.randomUUID();
  var buttonParams = {
    height: '30px',
    width: '85px',
    background: '#FFFFFF',
    color: '#2771D2',
    font: 'arial',
    font_weight: '700',
    font_size: '15px',
    border_radius: '5px',
    ripple_background: 'rgba(26,115,233,0.2)',
    get_root: uuid,
    render(area) {
      var btn = document.createElement('button');
      dlib_android_cache_ripple = this.ripple_background;
      btn.innerHTML = label;
      btn.style.height = this.height;
      btn.style.fontWeight = this.font_weight;
      btn.style.width = this.width;
      btn.style.background = this.background;
      btn.style.fontSize = this.font_size;
      btn.style.color = this.color;
      btn.style.fontFamily = this.font;
      btn.style.borderRadius = this.border_radius;
      btn.style.border = 'none';
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.style.cursor = 'pointer';
      btn.style.userSelect = 'none';

      function createRipple(event) {
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.background = buttonParams.ripple_background;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.transition = 'transform 0.6s linear, opacity 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.boxShadow = `0 0 20px 10px ${dlib_android_cache_ripple}`; // Softer border

        const rect = btn.getBoundingClientRect();
        ripple.style.left = `${event.clientX - rect.left - 50}px`;
        ripple.style.top = `${event.clientY - rect.top - 50}px`;

        btn.appendChild(ripple);

        setTimeout(() => {
          ripple.style.transform = 'scale(4)';
        }, 0);

        return ripple;
      }

      let activeRipple = null;

      function onMouseDown(event) {
        activeRipple = createRipple(event);
      }

      function onMouseUp() {
        if (activeRipple) {
          activeRipple.style.opacity = '0';
          setTimeout(() => {
            if (activeRipple) {
              activeRipple.remove();
              activeRipple = null;
            }
          }, 600);
        }
      }

      btn.addEventListener('mousedown', onMouseDown);
      btn.addEventListener('mouseup', onMouseUp);
      btn.addEventListener('mouseleave', onMouseUp);
      btn.addEventListener('touchstart', function(event) {
        activeRipple = createRipple(event.touches[0]);
      });
      btn.addEventListener('touchend', onMouseUp);
      btn.addEventListener('touchcancel', onMouseUp);

      btn.addEventListener('click', function() {
        if (typeof onclick === 'function') {
          onclick();
        }
      });

      area.appendChild(btn);
    }
  };

  return buttonParams;
},








Gbutton_type_3(label, onclick) {
  // Ripple effect CSS
  const style = document.createElement('style');
  style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
          button {
            -webkit-tap-highlight-color: transparent;
          }
        `;
  document.head.appendChild(style);
  var uuid = crypto.randomUUID();
  var buttonParams = {
    height: '30px',
    width: '85px',
    background: 'white',
    color: '#221821',
    font: 'arial',
    font_weight: '700',
    font_size: '15px',
    border_radius: '5px',
    ripple_background: 'rgba(122,122,122,0.2)',
    get_root: uuid,
    render(area) {
      var btn = document.createElement('button');
      dlib_android_cache_ripple = this.ripple_background;
      btn.innerHTML = label;
      btn.style.height = this.height;
      btn.style.fontWeight = this.font_weight;
      btn.style.width = this.width;
      btn.style.background = this.background;
      btn.style.fontSize = this.font_size;
      btn.style.color = this.color;
      btn.style.fontFamily = this.font;
      btn.style.borderRadius = this.border_radius;
      btn.style.border = 'none';
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.style.cursor = 'pointer';
      btn.style.border = '1.5px solid #7D727A';
      btn.style.userSelect = 'none';

      function createRipple(event) {
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.background = buttonParams.ripple_background;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.transition = 'transform 0.6s linear, opacity 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.boxShadow = `0 0 20px 10px ${dlib_android_cache_ripple}`; // Softer border

        const rect = btn.getBoundingClientRect();
        ripple.style.left = `${event.clientX - rect.left - 50}px`;
        ripple.style.top = `${event.clientY - rect.top - 50}px`;

        btn.appendChild(ripple);

        setTimeout(() => {
          ripple.style.transform = 'scale(4)';
        }, 0);

        return ripple;
      }

      let activeRipple = null;

      function onMouseDown(event) {
        activeRipple = createRipple(event);
      }

      function onMouseUp() {
        if (activeRipple) {
          activeRipple.style.opacity = '0';
          setTimeout(() => {
            if (activeRipple) {
              activeRipple.remove();
              activeRipple = null;
            }
          }, 600);
        }
      }

      btn.addEventListener('mousedown', onMouseDown);
      btn.addEventListener('mouseup', onMouseUp);
      btn.addEventListener('mouseleave', onMouseUp);
      btn.addEventListener('touchstart', function(event) {
        activeRipple = createRipple(event.touches[0]);
      });
      btn.addEventListener('touchend', onMouseUp);
      btn.addEventListener('touchcancel', onMouseUp);

      btn.addEventListener('click', function() {
        if (typeof onclick === 'function') {
          onclick();
        }
      });

      area.appendChild(btn);
    }
  };

  return buttonParams;
},
      
      
      
      
      
      
      Gbutton_type_4(label, onclick) {
  // Ripple effect CSS
  const style = document.createElement('style');
  style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(7);
              opacity: 0;
            }
          }
          button {
            -webkit-tap-highlight-color: transparent;
          }
        `;
  document.head.appendChild(style);
  var uuid = crypto.randomUUID();
  var buttonParams = {
    height: '50px',
    width: '100%',
    background: 'white',
    color: '#1C1C1C',
    font: 'arial',
    font_weight: '700',
    font_size: '15px',
    border_radius: '0px',
    font_align: 'left',
    ripple_background: 'rgba(122,122,122,0.2)',
    paddingLeft: '30px',
    get_root: uuid,
    render(area) {
      var btn = document.createElement('button');
      dlib_android_cache_ripple = this.ripple_background;
      btn.innerHTML = label;
      btn.style.height = this.height;
      btn.style.fontWeight = this.font_weight;
      btn.style.width = this.width;
      btn.style.background = this.background;
      btn.style.fontSize = this.font_size;
      btn.style.color = this.color;
      btn.style.fontFamily = this.font;
      btn.style.borderRadius = this.border_radius;
      btn.style.border = 'none';
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.style.cursor = 'pointer';
      btn.style.display = 'flex';
      btn.style.justifyContent = this.font_align;
      btn.style.alignItems = 'center';
      btn.style.paddingLeft = this.paddingLeft;
      //btn.style.border = '1.5px solid #7D727A';
      btn.style.userSelect = 'none';

      function createRipple(event) {
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.background = buttonParams.ripple_background;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.transition = 'transform 0.3s linear, opacity 0.3s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.boxShadow = `0 0 20px 10px ${dlib_android_cache_ripple}`; // Softer border

        const rect = btn.getBoundingClientRect();
        ripple.style.left = `${event.clientX - rect.left - 50}px`;
        ripple.style.top = `${event.clientY - rect.top - 50}px`;

        btn.appendChild(ripple);

        setTimeout(() => {
          ripple.style.transform = 'scale(4)';
        }, 0);

        return ripple;
      }

      let activeRipple = null;

      function onMouseDown(event) {
        activeRipple = createRipple(event);
      }

      function onMouseUp() {
        if (activeRipple) {
          activeRipple.style.opacity = '0';
          setTimeout(() => {
            if (activeRipple) {
              activeRipple.remove();
              activeRipple = null;
            }
          }, 600);
        }
      }

      btn.addEventListener('mousedown', onMouseDown);
      btn.addEventListener('mouseup', onMouseUp);
      btn.addEventListener('mouseleave', onMouseUp);
      btn.addEventListener('touchstart', function(event) {
        activeRipple = createRipple(event.touches[0]);
      });
      btn.addEventListener('touchend', onMouseUp);
      btn.addEventListener('touchcancel', onMouseUp);

      btn.addEventListener('click', function() {
        if (typeof onclick === 'function') {
          onclick();
        }
      });

      area.appendChild(btn);
    }
  };

  return buttonParams;
},
      
      
      
      
      
      
      
      

      Ginput(placeholder) {
        // Input bar CSS
        const style = document.createElement('style');
        style.textContent = `
          .g-input {
            position: relative;
            width: 100%;
            max-width: 300px;
            margin-top: 20px; /* Added margin for better separation */
          }
          .g-input input {
            width: 100%;
            padding: 16px 17px; /* Increased padding */
            font-size: 16px;
            border: 1px solid #DBDCDE;
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s;
          }
          .g-input label {
            position: absolute;
            top: 50%;
            left: 12px;
            transform: translateY(-50%);
            color: #888;
            font-size: 16px;
            transition: all 0.3s;
            pointer-events: none;
            background-color: #fff;
            padding: 0 4px;
            border-radius: 3px;
          }
          .g-input input:focus {
            border-width: 2px;
            border-color: #1A73E9;
          }
          .g-input input:focus + label,
          .g-input input:not(:placeholder-shown) + label {
            top: 0;
            left: 12px; /* Aligning to the left */
            transform: translateY(-50%);
            font-size: 12px;
            color: #1A73E9;
            padding: 0 4px; /* Adjusted padding */
            background-color: #fff;
          }
        `;
        document.head.appendChild(style);

        var inputParams = {
          width: '300px',
          border_color: '#DBDCDE',
          focus_border_color: '#1A73E9',
          label_color: '#888',
          focus_label_color: '#1A73E9',
          render(area) {
            var container = document.createElement('div');
            container.className = 'g-input';
            container.style.maxWidth = this.width;

            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = ' ';

            var label = document.createElement('label');
            label.innerHTML = placeholder;
            //console.log('label ' + label.innerHTML)

            container.appendChild(input);
            container.appendChild(label);

            area.appendChild(container);
            return {
              getValue(){
                return input.value;
              }
            }
          }
        };

        return inputParams;
      }
    }
  }
}

/*
// Usage example
const app = new Dlib_Android();

const input = app.Android().Ginput('Email of Phone');
const i = input.render(document.body);

const input2 = app.Android().Ginput('Password');
const i2 = input2.render(document.body);

document.body.innerHTML += '<br>'


const button = app.Android().Gbutton('Hello', function() { console.log('email'+i.getValue()); });
button.render(document.body);*/