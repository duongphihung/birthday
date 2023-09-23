const btnNo = document.querySelector(".btn-no");
const btnRefuse = document.querySelector(".btn-refuse");
const btnYes = document.querySelector(".btn-yes");
const card = document.querySelector('.card');
const btnPlay = document.querySelector('.btn-play');
const contai = document.querySelector('.contai');
const containerQuest = document.querySelector('.container-quest');

btnNo.addEventListener("click", () => {
    const randomX = Math.random() * (card.clientWidth - btnNo.clientWidth);
    const randomY = Math.random() * (card.clientHeight - btnNo.clientHeight);

    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
})

btnYes.addEventListener("click", () => {
    const randomX = Math.random() * (card.clientWidth - btnYes.clientWidth);
    const randomY = Math.random() * (card.clientHeight - btnYes.clientHeight);

    btnYes.style.transform = `translate(${randomX}px, ${randomY}px)`;
})

btnPlay.addEventListener("click", () => {
    containerQuest.classList.remove("active");
    containerQuest.classList.add("visi");
    contai.classList.remove("visi");
    contai.classList.add("active");
})

btnRefuse.addEventListener("click", () => {
    alert("Chơi đi em sợ sao =))");
})

//handle event in overlay
const overlay = document.getElementById('overlay');
const passwordInput = document.getElementById('passwordInput');
const message = document.getElementById('message');
const imgTroll = document.querySelector(".img-troll");
const btnTroll = document.querySelector(".btn-troll");

const correctPassword = '2004'; // Thay thế 'yourpassword' bằng mật khẩu thực sự

imgTroll.addEventListener("click", () => {
    imgTroll.classList.add("visi");
    btnTroll.classList.remove("visi");
    btnTroll.classList.add("active")
});

btnTroll.addEventListener("click", () => {
    overlay.style.display = 'flex';
})

setTimeout(() => {
    alert("Em hẳn tuyệt vọng lắm mới thấy được cái thông báo này, Nhấn vào cái mặt Troll Face để được giải thoát");
}, 200000);

passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (passwordInput.value === correctPassword) {
            window.location.href = 'card/birthdaycard.html'; // Thay thế 'yourredirecturl' bằng URL bạn muốn chuyển hướng đến
        } else {
            message.textContent = ':v Em vừa nhập 2409 đúng không? Hãy nhập năm sinh của em ấy =))';
        }
    }
});
