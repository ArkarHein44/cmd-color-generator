

let preview = document.getElementById("preview"),
    bgcolor = document.getElementById("bgcolor"),
    fgcolor = document.getElementById("fgcolor");

    let lastBgColorIndex = null;
    let lastFgColorIndex = null;

    // bgcolor.options[2].setAttribute("disabled","");
 
// console.log(preview); // div#preview.preview

// console.log(bgcolor); // select#bgcolor
// console.log(bgcolor.options[1].value); // #000
// console.log(txtcolor); // select#txtcolor
// console.log(bgcolor.options[1].value); // #000


function showyear(){
    let year = document.getElementById("year");
    // console.log(year);
    
    const date = new Date();
    let getyear = date.getFullYear();
    // console.log(getyear);

    year.innerText = getyear;
};

showyear();

const ansicolors = {
  "colors": {
    "0": {
      "name": "Black",
      "foreground": "#0c0c0c",  
      "background": "#0c0c0c"     
    },
    "1": {
      "name": "Blue",
      "foreground": "#0037da",  
      "background": "#0037da"    
    },
    "2": {
      "name": "Green",
      "foreground": "#13a10e",  
      "background": "#13a10e"     
    },
    "3": {
      "name": "Aqua",
      "foreground": "#3a96dd",  
      "background": "#3a96dd"    
    },
    "4": {
      "name": "Red",
      "foreground": "#c50f1f",  
      "background": "#c50f1f"     
    },
    "5": {
      "name": "Purple",
      "foreground": "#881798",  
      "background": "#881798"     
    },
    "6": {
      "name": "Yellow",
      "foreground": "#c19c00",  
      "background": "#c19c00"     
    },
    "7": {
      "name": "White",
      "foreground": "#cccccc",  
      "background": "#cccccc"     
    },
    "8": {
      "name": "Gray",
      "foreground": "#767676",  
      "background": "#767676"     
    },
    "9": {
      "name": "Light Blue",
      "foreground": "#3b78ff",  
      "background": "#3b78ff"     
    },
    "A": {
      "name": "Light Green",
      "foreground": "#16c60c",  
      "background": "#16c60c"     
    },
    "B": {
      "name": "Light Aqua",
      "foreground": "#61d6d6",  
      "background": "#61d6d6"     
    },
    "C": {
      "name": "Light Red",
      "foreground": "#e74856",  
      "background": "#e74856"     
    },
    "D": {
      "name": "Light Purple",
      "foreground": "#b4009e",  
      "background": "#b4009e"     
    },
    "E": {
      "name": "Light Yellow",
      "foreground": "#f9f1a5", 
      "background": "#f9f1a5"     
    },
    "F": {
      "name": "Bright White",
      "foreground": "#f2f2f2",  
      "background": "#f2f2f2"     
    }
  }
}
// console.log(ansicolors);

bgcolor.addEventListener('change',function bgcolorchange(){
  let bgindex = bgcolor.options[bgcolor.selectedIndex].value;
  let ansibgs = ansicolors.colors[bgindex].background;
  // console.log(ansibgs);
  
  preview.style.background = ansibgs;

  let bgcode = document.getElementById("bgcode");
  bgcode.textContent = bgindex;

  // fgcolor.options[bgcolor.selectedIndex].setAttribute("disabled","");

  if (lastBgColorIndex !== null) {
    fgcolor.options[lastBgColorIndex].removeAttribute("disabled");
}

fgcolor.options[bgcolor.selectedIndex].setAttribute("disabled", "");
lastBgColorIndex = bgcolor.selectedIndex;

});


fgcolor.addEventListener('change',function fgcolorchange(){
  let fgindex = fgcolor.options[fgcolor.selectedIndex];
  // console.log(fgindex);
  let ansifgs = ansicolors.colors[fgindex.value].foreground;
  // console.log(ansifgs);

  preview.style.color = ansifgs;

  let txtcode = document.getElementById("txtcode");
  txtcode.textContent = fgindex;

  // bgcolor.options[fgcolor.selectedIndex].setAttribute("disabled","");

  if (lastFgColorIndex !== null) {
    bgcolor.options[lastFgColorIndex].removeAttribute("disabled");
}

bgcolor.options[fgcolor.selectedIndex].setAttribute("disabled", "");
lastFgColorIndex = fgcolor.selectedIndex;
 
});



let closebtn = document.querySelector(".btn-close");
// console.log(closebtn);
let documentbtn = document.getElementById("doc-btn");
// console.log(documentbtn);
let documentmd = document.querySelector(".document");
// console.log(documentmd);

closebtn.addEventListener('click',function(){
  documentmd.style.display = "none";

  container.style.display = "flex";
  footer.style.display = "grid";
});

let container = document.querySelector(".container");
let footer = document.getElementById("footer");

let contactbtn = document.getElementById("contact");
let aboutmd = document.querySelector('.about');

contactbtn.addEventListener("click",function(){
    aboutmd.style.display = "flex";

    container.style.display = "none";
    footer.style.display = "none";
})

documentbtn.addEventListener('click',function(){
  documentmd.style.display = "block";

  container.style.display = "none";
  footer.style.display = "none";
});

window.onclick = function(e){
  if(e.target === document.body ){
    documentmd.style.display = "none";
    aboutmd.style.display = "none";

    container.style.display = "flex";
    footer.style.display = "grid";
  }
}

let closebtn2 = document.querySelector(".btn-close-2");

closebtn2.addEventListener('click',function(){
  aboutmd.style.display = "none";

  container.style.display = "flex";
  footer.style.display = "grid";
});
