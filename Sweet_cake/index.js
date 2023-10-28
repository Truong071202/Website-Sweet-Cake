// Lấy đối tượng button
var button = document.getElementById("myButtonBuy");

// Lắng nghe sự kiện click của button
button.addEventListener("click", function() {
  // Hiển thị thông báo
  alert("Mua hàng thành công");
});


var chooseSize = document.getElementsByClassName('size-num')

chooseSize.addEventListener('click', function(){
    chooseSize.style.color = 'red!important'
})


