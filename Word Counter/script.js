let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function(){
  var text = this.value;
  var char = text.length;
  document.getElementById("ch").innerHTML = char;

  let trim_txt = text.trim();
  let word = trim_txt.split(" ");;
  let final_word = word.filter(function(elm){
    return elm != "";
  });
  document.getElementById("wo").innerHTML = final_word.length;
  
})