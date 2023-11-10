function updateWindowSize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById('window-size').textContent = 'Width: ' + width + 'px, Height: ' + height + 'px';
  }

window.onresize = updateWindowSize;
window.onload = updateWindowSize;


let tabTitles = document.getElementsByClassName("user");
let tabContents = document.getElementsByClassName("tabContents");

function opentab(tabName) {
for(user of tabTitles) {
    user.classList.remove("active");
}
for(tabContent of tabContents) {
    tabContent.classList.remove("active");
}

event.currentTarget.classList.add("active");

document.getElementById(tabName).classList.add("active");

}