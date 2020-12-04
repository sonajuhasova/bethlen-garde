//large screen navigation
//code source: https://github.com/jlop007/change-styles-on-scroll-JS

window.addEventListener('scroll', function () {
            let header = document.querySelector('.navbar');
            let windowPosition = window.scrollY > 600;
            header.classList.toggle('scrolling-active', windowPosition);
        })

