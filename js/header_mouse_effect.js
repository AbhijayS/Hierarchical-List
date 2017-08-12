var headerEl = document.getElementsByTagName('header');
headerEl = headerEl[0];
headerEl.addEventListener("mouseenter", fold);
headerEl.addEventListener("mouseleave", unfold);

function fold(ev)
{
  console.log(ev.clientX);
  if (ev.clientX <= (window.innerWidth/2))
  {
    headerEl.style.borderBottomLeftRadius = "80%";
    headerEl.style.borderBottomRightRadius = "50px";

  }else {
    headerEl.style.borderBottomLeftRadius = "50px";
    headerEl.style.borderBottomRightRadius = "80%";
  }
}

function unfold(ev)
{
  console.log(ev.clientX);
  if (ev.clientX <= (window.innerWidth/2))
  {
    headerEl.style.borderBottomLeftRadius = "50px";
    headerEl.style.borderBottomRightRadius = "50px";

  }else {
    headerEl.style.borderBottomRightRadius = "50px";
    headerEl.style.borderBottomLeftRadius = "50px";

  }
}
