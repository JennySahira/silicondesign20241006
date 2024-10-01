var acc = document.getElementsByClassName("btn-faq");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;  // Collapse the panel
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";  // Expand the panel to its full height
    }
  });
}