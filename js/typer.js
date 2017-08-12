var words = ['LISTS', 'TODO LISTS', 'TRIP PLANS', 'HOMEWORK', 'PROJECTS'];
var typeEl = document.getElementById('writeGen');
typeEl.innerHTML += "<span id='cursor'>|</span>";

var typingItv = window.setInterval(type, 1000/2);
var i = 0;
var j = 0;
var deletePos;

function type() {
  if (j >= words[i].length)
  {

    if (deletePos > 0)
    {
      typeEl.innerText = words[i].substring(0, deletePos);
      typeEl.innerHTML += "<span id='cursor'>|</span>";
      deletePos--;
    }else{
      j = 0;
      i++;
      typeEl.innerHTML = "<span id='cursor'>|</span>";
    }
    if (i >= words.length) {
      typeEl.innerText = words[0];
      typeEl.innerHTML += "<span id='cursor'>|</span>";
      window.clearInterval(typingItv);
    }
  }else{
    deletePos = j;
    typeEl.innerText = typeEl.innerText.substring(0, typeEl.innerText.length-1);
    typeEl.innerText = words[i].substring(0, j+1);
    typeEl.innerHTML += "<span id='cursor'>|</span>";
    j++;
  }
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
