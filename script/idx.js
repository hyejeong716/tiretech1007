//more버튼을 누르면 sns내용이 더 보임
document.querySelector('.moreBtn').addEventListener('click',function(){
document.querySelector('.itemWrap2').style.display = 'block';
document.querySelector('.more').style.display = 'none'; })



//popup click close

/* <div id="popup">
    <div class="popup_content">
      <figure>
        <img src="img/banner1.jpg" alt="">
      </figure>
      <div class="popup_footer">
        <label>
          <input type="checkbox">오늘 하루 열지 않기
        </label>
        <a href="#" class="popup_close">닫기 ×</a>
      </div>
    </div>
웹페이지 메인 페이지의 팝업부분이야 
위에html문서에서 label부분을 클릭하면 오늘 하루 위 팝업창이 열리지않는 js만들어줘 */

document.querySelector('.popup_close').addEventListener('click', ()=>{
  popup.querySelector('#popup').style.display = 'none'; 
})

const popup = document.querySelector("#popup");
const checkbox = document.querySelector("#popup input[type='checkbox']");
const closeBtn = document.querySelector(".popup_close");

// 오늘 날짜
const today = new Date().toISOString().split("T")[0];

// 저장된 날짜 확인
const hideDate = localStorage.getItem("popupHideDate");

// 오늘 날짜와 저장된 날짜가 같으면 팝업 숨기기
if (hideDate === today) {
  popup.style.display = "none";
}

// 닫기 버튼
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popup.style.display = "none";
});

// 오늘 하루 열지 않기 체크
checkbox.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("popupHideDate", today);
    popup.style.display = "none";
  }
});