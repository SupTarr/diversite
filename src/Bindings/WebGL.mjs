// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$Array from "rescript/lib/es6/array.js";
import * as Three from "three";
import * as Caml_array from "rescript/lib/es6/caml_array.js";

function clearMouseEvents(element) {
  element.onmousemove = (function (param) {
      
    });
  element.onmouseout = (function (param) {
      
    });
  
}

var $$Document = {
  clearMouseEvents: clearMouseEvents
};

var camera = [[]];

function getCamera(element) {
  if (Caml_array.get(camera, 0).length !== 0) {
    return Caml_array.get(Caml_array.get(camera, 0), 0);
  }
  var newCamera = new (Three.OrthographicCamera)(element.offsetWidth / -2, element.offsetWidth / 2, element.offsetHeight / 2, element.offsetHeight / -2, 1, 2000);
  Caml_array.set(camera, 0, $$Array.append(Caml_array.get(camera, 0), [newCamera]));
  return Caml_array.get(Caml_array.get(camera, 0), 0);
}

var paramAntialias = JSON.parse("{\"antialias\": true, \"alpha\": true}");

var renderer = new (Three.WebGLRenderer)(paramAntialias);

function onResize(element) {
  document.body.onresize = (function (param) {
      Caml_array.get(Caml_array.get(camera, 0), 0).aspect = element.offsetWidth / element.offsetHeight;
      Caml_array.get(Caml_array.get(camera, 0), 0).updateProjectionMatrix();
      renderer.setSize(element.offsetWidth, element.offsetHeight);
      
    });
  
}

var Three$2 = {
  camera: camera,
  getCamera: getCamera,
  paramAntialias: paramAntialias,
  renderer: renderer,
  onResize: onResize
};

var isNotSupportedWebGl = (function(a) {
        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        var ua = navigator.userAgent.toLowerCase();
        var isIE = (ua.indexOf('msie') > -1);
        if ((isSafari && iOS) || isIE) {
            return true;
        } else if(isSafari || isIE) {
            return true;
        } else {
            return false;
        }
    });

var setCanvasStyle = (function(canvas) {
      if (canvas) {
        canvas.style.position = "absolute";
        canvas.style.top = "0px";
        canvas.style.zIndex = "-1";
      }
    });

var validElementById = (function(canvas_id) {
      if (document.getElementById(canvas_id)) {
        return true;
      } else {
          return false;
      }
    });

var setIdToElement = (function(canvas, id) {
      if (canvas) {
        canvas.id = id;
      }
    });

var mouseX = (function(event) {
      return (event.clientX);
    });

var mouseY = (function(event) {
    return (event.clientY);
  });

var changeClassName = (function(element, className) {
    console.log(className);
    if (element) {
      element.className = className;
    }
  });

export {
  $$Document ,
  Three$2 as Three,
  isNotSupportedWebGl ,
  setCanvasStyle ,
  validElementById ,
  setIdToElement ,
  mouseX ,
  mouseY ,
  changeClassName ,
  
}
/*  Not a pure module */
