
function readFile() {
  jQuery.get("12.txt", function(txt) {
      var qoute = txt.split(".");
      var i = Math.floor(Math.random() * (qoute.length-1));
    $("#output").text(qoute[i]);
      console.log(qoute)
  });
}
