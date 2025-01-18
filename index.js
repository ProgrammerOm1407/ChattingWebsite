let regexp = /android|iphone|kindle|ipad/i;
let pc = /desktop/i;

let isMobileDevice = regexp.test(navigator.userAgent);
let isDesktop = pc.test(navigator.userAgent);
if (isMobileDevice) {
    // location.href = "./mobile.html"
    console.log("Its a Mobile !");

}
//  else {
//     location.href = "./desktop.html";

//     console.log("Its a Desktop !");
// }





if ((window.innerWidth <= 800)) {
    location.href = "./mobile/mobile.html"

    // alert("mobile");
}

if (window.innerWidth >= 600) {
    location.href = "./desktop/desktop.html";

    // alert("desktop");
}