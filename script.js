let body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar');

    function OpenSidebar() {
        sidebar.classList.toggle('close')
    }

    // ou

    // let toggle = body.querySelector('.toggle')

    // toggle.addEventListener('click', () =>{
    //     sidebar.classList.toggle('close')
    // });