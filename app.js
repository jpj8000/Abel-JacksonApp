function daysTill(dateString) {
  var ch = new Date(dateString)
  var today = new Date();
  var diff = ch.getTime() - today.getTime();
  var getTime = Math.ceil (diff/1000/3600/24);
  return getTime;
}
