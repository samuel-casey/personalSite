//////////////////////////////////////////////////////////////////////////////
// photo hover effects  //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// text for photos
const commentaryList = document.querySelectorAll('#commentary')

const commentaryOne = commentaryList[0]
const commentaryTwo = commentaryList[1]
const commentaryThree = commentaryList[2]

// image elements
const elemList = document.querySelectorAll('#photos')

const elemOne = elemList[0]
const elemTwo = elemList[1]
const elemThree = elemList[2]

// overlay elements
const overlayList = document.querySelectorAll('.imgOverlay')

const overlayOne = overlayList[0]
const overlayTwo = overlayList[1]
const overlayThree = overlayList[2]

// hover image one
overlayOne.onmouseover = () => {
    overlayOne.style.opacity = 0.5;
    commentaryOne.style.opacity = 1;
    commentaryOne.style.color = "white";
}

overlayOne.onmouseout = () => {
    overlayOne.style.opacity = 0;
    commentaryOne.style.color = "white";
    commentaryOne.style.opacity = 0;

}

// hover image two
overlayTwo.onmouseover = () => {
    overlayTwo.style.opacity = 0.5;
    commentaryTwo.style.opacity = 1;
    commentaryTwo.style.color = "white";
}

overlayTwo.onmouseout = () => {
    overlayTwo.style.opacity = 0;
    commentaryTwo.style.color = "white";
    commentaryTwo.style.opacity = 0;

}

// hover image three

overlayThree.onmouseover = () => {
    overlayThree.style.opacity = 0.5;
    commentaryThree.style.opacity = 1;
    commentaryThree.style.color = "white";
}

overlayThree.onmouseout = () => {
    overlayThree.style.opacity = 0;
    commentaryThree.style.color = "white";
    commentaryThree.style.opacity = 0;

};

//////////////////////////////////////////////////////////////////////////////
// navbar interactivity //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// // navbar variables

const toggleButton = document.getElementById('toggleButtonCollapsed')
const navbarExternalContent = document.querySelector('.navbarExternalContent')
const navbar = document.querySelector('#navbar')
const transition = document.querySelector('.navbarTransition')

// helper functions

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const helperTwo = function() {
    document.location.reload(true)
}

const helperOne = function() {
    navbarExternalContent.classList.add('navbarTransition')
    sleep(2).then(() => {
        navbar.classList.remove('row-1')
        navbar.classList.add('row-12')
    });
    sleep(200).then(() => {
        toggleButton.removeEventListener('click', helperOne);
        toggleButton.addEventListener('click', helperTwo);
    })
}

// add event listeners

toggleButton.addEventListener('click', helperOne)

//Jquery for window resize add/remove class
jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 450) {

            $('#mainContainer').removeClass('main');
            $('#mainContainer').addClass('vertical');

            $('#photo1').removeClass('col-2');

            $('#photo2').removeClass('col-3');
            $('#photo2').addClass('col-1');


            $('#photo3').removeClass('col-4');
            $('#photo3').addClass('col-1');

            $('#overlay1').removeClass('col-2');
            $('#overlay2').removeClass('col-3');
            $('#overlay3').removeClass('col-4');

        } else if (ww >= 451) {

            $('#mainContainer').addClass('main');
            $('#mainContainer').removeClass('vertical')

            $('#photo1').addClass('col-2');
            $('#photo2').addClass('col-3');
            $('#photo3').addClass('col-4');

            $('#overlay1').addClass('col-2');
            $('#overlay2').addClass('col-3');
            $('#overlay3').addClass('col-4');
        };
    };
    $(window).resize(function() {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});