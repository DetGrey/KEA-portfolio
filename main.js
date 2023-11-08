const showMoreToggle = document.querySelectorAll('.show-more');

showMoreToggle.forEach(showMore => {
    showMore.addEventListener('click', () => {
        showMore.children[0].innerText = showMore.children[0].innerText === 'Show more' ? 'Show less' : 'Show more';
        showMore.children[1].classList.toggle('rotate');

        let prevSibling = showMore.previousElementSibling;
        prevSibling.classList.toggle('hidden');
    });
});

const headers = document.querySelectorAll('header');
headers.forEach(header => {
    header.innerHTML = `
<header>
    <img id="triangle" src="Triangle.svg" alt="triangle">

    <!-- NAVIGATION LINKS -->
    <nav>
        <ul>
            <li><a class="flexbox-item" href="index.html">Home</a></li>
            <li class="dropdown flexbox-item">
                <a class="dropbtn" href="projects.html">Projects</a>
                <div class="dropdown-content">
                    <a class="flexbox-item" href="projects.html#draw-your-heart-out">Draw your heart out</a>
                    <a class="flexbox-item" href="projects.html#gif-emotions">Gif Emotions</a>
                    <a class="flexbox-item" href="projects.html#imdb-clone">IMDB clone</a>
                    <a class="flexbox-item" href="projects.html#find-luffy">Find Luffy</a>
                    <a class="flexbox-item" href="projects.html#imprecise-calculator">Imprecise calculator</a>
                    <a class="flexbox-item" href="projects.html#tic-tac-toe">Tic Tac Toe</a>
                </div>
            </li>
            <li class="dropdown flexbox-item">
                <a class="dropbtn">Courses</a>
                <div class="dropdown-content">
                    <a class="flexbox-item" href="CS50.html">CS50x</a>
                </div>
            </li>
            <li class="dropdown flexbox-item">
                <a class="dropbtn" href="it-architecture.html">IT-archi..</a>
                <div class="dropdown-content">
                    <a class="flexbox-item" href="databases.html">Database design</a>
                    <a class="flexbox-item" href="webtechnology.html">Web techonology</a>
                    <a class="flexbox-item" href="visualisation.html">Visualisation & aesthetics</a>
                </div>
            </li>
        </ul>
    </nav>
    
    <img id="logo" src="P.gif" alt="Logo"/>
</header>
`;
})

