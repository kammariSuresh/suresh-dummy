{/* <script> */}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overLay = document.querySelector(".menu-nav-class");
    const navLinkSidebar = document.getElementById("navLinkSidebar");

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navLinkSidebar.classList.toggle("nav-link-sidebar");
        hamburger.classList.toggle('active');
        overLay.classList.toggle('active');
    });

    overLay.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLinkSidebar.classList.toggle("nav-link-sidebar");
        overLay.classList.toggle('active');
    });
});


{/* </script>

<script> */}
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle scroll event
    function handleScroll() {
        var scroll = window.scrollY; // Get the vertical scroll position
        var objectSelect = document.getElementById('section2');
        var objectPosition = objectSelect.getBoundingClientRect().top + window.scrollY;

        if (scroll > objectPosition) {
            document.getElementById('menu-nav').classList.add('displayNav');

        } else {
            document.getElementById('menu-nav').classList.remove('displayNav');
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            const overLay = document.querySelector(".menu-nav-class");
            if (navLinks.classList.contains('active')) {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
                overLay.classList.toggle('active');
                navLinkSidebar.classList.toggle("nav-link-sidebar")
            }

        }
    }

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
});


// </script>


// <script>
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('hover-this')) {
        document.querySelector('.cursor').style.transform = 'translate(-50%, -50%) scale(3)';
    }
});

document.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('hover-this')) {
        document.querySelector('.cursor').style.transform = 'translate(-50%, -50%) scale(1)';
    }
});
// </script>



// .......................................Home projects js ..........................................

const clamp = (min, number, max) => Math.min(max, Math.max(number, min));
let prevX = 0;

document.querySelectorAll(".list_item_main").forEach((member) => {
  const hoverMainContainer = member.querySelector(".hover_main_container");
  let timeout;

  member.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);

    const x = e.clientX - member.getBoundingClientRect().left - hoverMainContainer.clientWidth / 2;
    const y = e.clientY - member.getBoundingClientRect().top - hoverMainContainer.clientHeight / 2;
    const rotate = e.clientX - prevX;
    prevX = e.clientX;
    
    // console.log({y, x, rotate});

    requestAnimationFrame(() => {
      hoverMainContainer.style.translate = `${x}px ${y}px`;
      hoverMainContainer.style.rotate = clamp(-8, rotate * 0, 8) + "deg";
    });

    timeout = setTimeout(() => {hoverMainContainer.style.rotate = "0deg"}, 250);
  });

  member.addEventListener("mouseenter", () => {
    setTimeout(() => {
      hoverMainContainer.style.transition = "1200ms cubic-bezier(0.23, 1, 0.320, 1)";
      hoverMainContainer.style.opacity = 1;
    }, 1);
  });

  member.addEventListener("mouseleave", () => {
    hoverMainContainer.style.transition = "none";
    hoverMainContainer.style.opacity = 0;
  });
});


// ............................................... Hiding cursor .................................

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
// Apply the 'hide-cursor' class if on mobile
if (isMobileDevice()) {
    document.body.classList.add('hide-cursor');
}