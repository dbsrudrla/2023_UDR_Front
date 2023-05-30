const dropdown = document.querySelector(".dropdown")
const toggleButton = document.querySelector(".dropdown-toggle")
const menu = document.querySelector(".dropdown-menu")
const options = document.querySelectorAll(".dropdown-option")
const nextButton = document.querySelector(".next-button")

// 토글 버튼이 클릭되면 메뉴를 클릭
// 메뉴의 maw-height가 0
// 메뉴.show -> 해지
toggleButton.addEventListener("click", function(){
    // 토글 버튼을 클릭하면 menu에 show가 없으면 추가, 있으면 냅두기
    menu.classList.toggle("show");
})

toggleButton.addEventListener("blur", function(){
    // 선택했던 것을 해제시켜줌
    menu.classList.remove("show");
})

// 동일한 모든 옵션들에게 적용됨(foreach : 반복)
options.forEach(function(item){
    item.addEventListener("click", function(e){
        const buttonLabel = e.currentTarget.textContent.trim()
        toggleButton.textContent = buttonLabel
        toggleButton.classList.add("selected")
        nextButton.removeAttribute("disabled")
    })
})

