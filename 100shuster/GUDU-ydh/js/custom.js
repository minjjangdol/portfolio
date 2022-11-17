// 체크박스 하나만 선택
function oneCheckbox(el){
  var obj = document.getElementsByName("shoes");
  for(var i=0; i<obj.length; i++){
      if(obj[i] != el){
          obj[i].checked = false;
      }
  }
  //체크박스, 폰트 색상 변경
  el.parentNode.style.color = el.checked ? "#4F1421" : "#333";
}

/*
기타문의

function myFunction() {
    // 체크박스
    var checkBox = document.getElementById("myCheck");
    // 체크하면 하단에 텍스트박스 등장
    var text = document.getElementById("textbar");
  
    // 체크하면 display: block, 풀면 none
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  
*/

//옵션체크 검사
function CheckForm(){
        
  //체크박스 체크여부 확인 [동일 이름을 가진 체크박스 여러개일 경우]
  var isShoesChk = false;
  var arr_Shoes = document.getElementsByName("shoes");
  for(var i=0;i<arr_Shoes.length;i++){
      if(arr_Shoes[i].checked == true) {
          isShoesChk = true;
          break;
      }
  }

  if(!isShoesChk){
      alert("옵션을 선택해주세요.");
      return false;
  }
  
}


class TabbedContent {
  constructor() {
    this.tabs = document.querySelectorAll(".nav li");
    this.sections = document.querySelectorAll(".section");
    this.nextButton = document.querySelector("#nextBtn");
    this.prevButton = document.querySelector("#prevBtn");
    this.current = 0;
  }

  toggleTabs() {
    this.tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
    this.tabs[this.current].classList.add("active");
  }

  toggleSections() {
    this.sections.forEach(function(section) {
      section.classList.remove('active');
    });
    this.sections[this.current].classList.add("active");
  }

  togglePrev() {
    const method = this.current == 0 ? 'add' : 'remove';
    this.prevButton.classList[method]("disable");
  }

  toggleNext() {
    const method = this.current == this.tabs.length - 1 ? 'add' : 'remove';
    this.nextButton.classList[method]("disable");
  }

  goNext() {
    if (this.current < this.tabs.length - 1) {
      this.current++
    }
    this.toggleTabs();
    this.toggleSections();
    this.toggleNext();
    this.togglePrev();


  }
  goNext() {
    if (this.current < this.tabs.length - 0) {
      this.current++
    }
    return false

  }

  goPrev() {
    if (this.current > 0) {
      this.current--
    }
    this.toggleTabs();
    this.toggleSections();
    this.toggleNext();
    this.togglePrev();
  }

}

const tabbedContent = new TabbedContent();