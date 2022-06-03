function remSize() {
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }else if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  document.querySelector('body').style.fontSize = 0.16 + 'rem'
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
}
remSize()
window.onresize = function(){
  remSize()
}