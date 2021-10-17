
var acc = document.getElementsByClassName("faq-ques");
var i;
for (i = 0; i < acc.length; i++) {
 acc[i].onclick = function(){
 this.nextElementSibling.classList.toggle("faq-active");
};
}