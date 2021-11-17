//
// The code here is an absolute mess.
//


var cssElem = document.getElementById("picrewImproverCSS")

if (!cssElem) {
    cssElem = document.createElement("link");
    cssElem.rel = "stylesheet";
    cssElem.href = browser.runtime.getURL("picrew.css");
    cssElem.id = "picrewImporoverCSS"
    document.head.appendChild(cssElem);
} else {
    cssElem.href = "";
    cssElem.href = browser.runtime.getURL("picrew.css") + Math.floor(Math.random()*1000);
}

var translationMap = {
    "imagemaker_info_btn_help": "Help",
    "imagemaker_info_btn_start": "Start",
    "imagemaker_btn_random": "Randomize All",
    "imagemaker_btn_allreset": "Full Reset",
    "imagemaker_menu_btn_close": "Close",
    "imagemaker_complete_btn": "<i aria-hidden='true' class='fa fa-check'></i>&nbsp;Done!",
    "complete-Message": "Completed!",
    "complete-Download_Btn": "Download Image",
    "complete-Share_Title": "Share It!",
    "complete-ShareText_Title": "Message Text:",
    "complete-Btn_Back": "Make Another!"
}

function translationCheck() { // pretend it also mentions the scroll thing
    for (const key in translationMap) {
        var elem = document.getElementsByClassName(key);
        if (elem.length >= 1) {
            console.log(key + " is real.")
            elem[0].innerHTML = translationMap[key];
            if (key == "imagemaker_btn_random" && elem.length > 1) {
                elem[1].innerHTML = "Randomize Items"
            }
        } else {console.log(key + " is not real.")}
    }
    var elems = document.getElementsByClassName("imagemaker_controller_reset");
    for (elem in elems) {
        elems[elem].innerHTML = "Reset";
    }
    new ScrollBooster({
        viewport: document.querySelector('.imagemaker_parts_menu'),
        scrollMode: 'native'
    });
}

setTimeout(translationCheck,2000);
