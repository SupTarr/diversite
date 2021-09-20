// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_option from "rescript/lib/es6/js_option.js";

function Popup(Props) {
  var isOpenOpt = Props.isOpen;
  var className = Props.className;
  var hasCloseBtnOpt = Props.hasCloseBtn;
  var closeBtnText = Props.closeBtnText;
  var closeOnBgClickOpt = Props.closeOnBgClick;
  var showXOpt = Props.showX;
  var closeFuncOpt = Props.closeFunc;
  var children = Props.children;
  var isOpen = isOpenOpt !== undefined ? isOpenOpt : true;
  var hasCloseBtn = hasCloseBtnOpt !== undefined ? hasCloseBtnOpt : false;
  var closeOnBgClick = closeOnBgClickOpt !== undefined ? closeOnBgClickOpt : false;
  var showX = showXOpt !== undefined ? showXOpt : true;
  var closeFunc = closeFuncOpt !== undefined ? closeFuncOpt : (function (param) {
        
      });
  var popupClass = isOpen ? "popup-open" : "popup-closed";
  return React.createElement("div", {
              className: "popup-holder " + popupClass + " " + Js_option.getWithDefault("popup-default", className)
            }, React.createElement("div", {
                  className: "popup-backing",
                  onClick: closeOnBgClick ? (function (param) {
                        return Curry._1(closeFunc, undefined);
                      }) : (function (param) {
                        
                      })
                }), React.createElement("div", {
                  className: "popup"
                }, showX ? React.createElement("div", {
                        className: "popup-x",
                        onClick: (function (param) {
                            return Curry._1(closeFunc, undefined);
                          })
                      }, "×") : null, React.createElement("div", {
                      className: "popup-content"
                    }, children), hasCloseBtn ? React.createElement("div", {
                        className: "btn popup-close-btn",
                        onClick: (function (param) {
                            return Curry._1(closeFunc, undefined);
                          })
                      }, Js_option.getWithDefault("Close Popup", closeBtnText)) : null));
}

var make = Popup;

export {
  make ,
  
}
/* react Not a pure module */