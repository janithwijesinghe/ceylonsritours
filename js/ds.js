 let modal = document.getElementsByClassName('modal2')[0];

let closeModal = function () {
    modal.classList.remove('modal2--show');
    modal.classList.add('modal2--hide');

    let afterAnimation = function () {
        modal.classList.remove('modal2--hide');
    }

    modal.addEventListener("webkitAnimationEnd", afterAnimation, false);
    modal.addEventListener("oAnimationEnd", afterAnimation, false);
    modal.addEventListener("msAnimationEnd", afterAnimation, false);
    modal.addEventListener("animationend", afterAnimation, false);
}

function runmodal() {
    let modal = document.getElementsByClassName('modal2')[0],

        close = document.getElementsByClassName('modal__close');

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            closeModal();
        }
    }

    window.onclick = function (e) {
        if (e.target === modal) {
            closeModal();
        }
    }

    document.onkeyup = function (e) {
        e = e || window.event;
        if (modal.classList.contains('modal2--show')) {
            if (e.keyCode === 27) {
                closeModal();
            }
        }
    }
}

runmodal();

setTimeout(function () {
    modal.classList.add('modal2--show');
}, 1000)