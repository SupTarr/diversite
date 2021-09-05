// Generated by ReScript, PLEASE EDIT WITH CARE


var PortfolioLink = {};

function getImageBorderClass(borderType) {
  switch (borderType) {
    case /* PhonePortrait */0 :
        return "phone-portrait";
    case /* PhonePortraitBlack */1 :
        return "phone-portrait phone-black";
    case /* PhoneLandscape */2 :
        return "phone-landscape";
    case /* PhoneLandscapeBlack */3 :
        return "phone-landscape phone-black";
    case /* Desktop */4 :
        return "desktop";
    case /* Tablet */5 :
        return "tablet-landscape";
    
  }
}

var PortfolioItem = {
  getImageBorderClass: getImageBorderClass
};

export {
  PortfolioLink ,
  PortfolioItem ,
  
}
/* No side effect */
