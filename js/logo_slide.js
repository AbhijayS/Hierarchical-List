var headItems = document.getElementsByTagName('header');
headItems = headItems[0].children;
var margin = 0;
var slideItv = window.setInterval(slide, 1000/60);

function slide()
{
  if (margin > 15*(headItems.length))
  {
    window.clearInterval(slideItv);
  }else{
    var currItem = parseInt(margin/15);
    console.log(currItem);
    for (var i = currItem; i < headItems.length; i++)
    {
      headItems[i].style.marginLeft = margin.toString()+"%";
    }
    margin++;
  }
}
