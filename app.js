const btn = document.querySelector('#hamburger')
const list = document.querySelectorAll('header nav ul li')


btn.addEventListener('click', show)



function show() {
    for (let li of list) {
        if (li.classList.contains('hide')) {
            li.classList.remove('hide')
        }
        else {
            li.classList.add('hide')
        }
    }
}
