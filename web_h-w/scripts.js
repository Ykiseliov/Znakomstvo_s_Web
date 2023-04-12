// JavaScript code for search functionality
var form = document.querySelector('form');
var input = document.querySelector('input');
var blocks = document.querySelectorAll('.block');

form.addEventListener('submit', function(e){
 e.preventDefault();
 var search = input.value.trim().toLowerCase();
 for(var i = 0; i < blocks.length; i++){
  var text = blocks[i].querySelector('.text').textContent.trim().toLowerCase();
  if(text.indexOf(search) != -1){
   blocks[i].style.display = 'flex';
  }else{
   blocks[i].style.display = 'none';
  }
 }
});
