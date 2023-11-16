function openPopup(popupId) {
    var popup = document.getElementById('popup' + popupId);
    var overlay = popup.querySelector('.overlay');
    var body = document.body;

    // Add the class for sliding in from the bottom
    popup.classList.add('slideFromBottom');

    // Remove the hidden-content class to ensure the popup is visible
    popup.classList.remove('hidden-content');

    // Make the popup visible initially
    popup.style.display = 'block';

    // Add a class to the body element to make other contents transparent
    body.classList.add('popup-open');

    // Adjust the opacity of the website content
    var websiteContent = document.querySelectorAll('.container, header, footer');
    for (var i = 0; i < websiteContent.length; i++) {
        websiteContent[i].classList.add('fadeContent');
    }

    // Delay hiding the popup until the animation is complete
    setTimeout(function () {
        // Hide the overlay
        overlay.classList.remove('popup-show');

        // Clear the animation class for sliding
        popup.classList.remove('slideFromBottom');
    }, 1000); // Adjust the delay time as needed
}


function closePopup(popupId) {
    var popup = document.getElementById('popup' + popupId);
    var overlay = popup.querySelector('.overlay');
    var body = document.body;

    // Remove the class for the overlay to hide it
    overlay.classList.remove('popup-show');

    // Add the class for sliding out
    popup.classList.add('slideToBottom');

    // Remove the class for sliding in
    popup.classList.remove('slideFromBottom');

    // Add a one-time animationend event listener
    var animationEndHandler = function () {
        // Hide the popup
        popup.style.display = 'none';

        // Remove the sliding class
        popup.classList.remove('slideToBottom');

        // Remove the class for reverse opacity transition
        body.classList.remove('popup-open');

        // Adjust the opacity of the website content
        var websiteContent = document.querySelectorAll('.container, header, footer');
        for (var i = 0; i < websiteContent.length; i++) {
            websiteContent[i].classList.remove('fadeContent');
        }

        // Stop all video playback
        var videoFrames = popup.querySelectorAll('.right-column iframe');
        for (var i = 0; i < videoFrames.length; i++) {
            var videoFrame = videoFrames[i];
            var videoSrc = videoFrame.src;

            // Check if the video is a YouTube video
            if (videoSrc.includes('youtube.com')) {
                // Extract the video ID
                var videoId = videoSrc.match(/embed\/([^?]+)/)[1];

                // Modify the video frame source to stop the playback
                videoFrame.src = 'https://www.youtube.com/embed/' + videoId + '?si=0Nc8tHsBw5OF-lBu&autoplay=0';
            }
        }

        // Remove the event listener to prevent it from firing again
        popup.removeEventListener('animationend', animationEndHandler);
    };

    // Add the animationend event listener
    popup.addEventListener('animationend', animationEndHandler);
}


// Use window.onload to ensure the content is loaded before applying animations
window.onload = function () {
    // Select the elements you want to animate
    var imageSection = document.querySelector('.section.image');
    var contentBlock = document.querySelector('.section.content-block-1');

    // Add the hidden-content class initially
    imageSection.classList.add('hidden-content');
    contentBlock.classList.add('hidden-content');

    // Remove the hidden-content class to reveal content and trigger the animation
    setTimeout(function () {
        imageSection.classList.remove('hidden-content');
        contentBlock.classList.remove('hidden-content');
    }, 100); // Adjust the delay as needed
}

// JavaScript to change the image source on hover and restore on mouseout
function changeImage(newSrc) {
    var logoImage = document.getElementById("logoImage");
    logoImage.src = newSrc;
}

function restoreImage() {
    var logoImage = document.getElementById("logoImage");
    logoImage.src = "Images/Icon-25.png";
}

// JavaScript to change the nav icon on hover and restore on mouseout
function changeNavIcon(element, newSrc) {
    var navIcon = element.querySelector('.nav-icon');
    // Store the original source in a data attribute
    if (!navIcon.dataset.originalSrc) {
        navIcon.dataset.originalSrc = navIcon.src;
    }
    navIcon.src = newSrc;
}

function restoreNavIcon(element) {
    var navIcon = element.querySelector('.nav-icon');
    // Restore to the original source stored in the data attribute
    navIcon.src = navIcon.dataset.originalSrc || "Images/Icon-31.png";
}

// JavaScript to change the heading image on hover and restore on mouseout
function changeHeadingImage(element, newSrc) {
    var headingImage = element.querySelector('.heading-image');
    headingImage.src = newSrc;
}

function restoreHeadingImage(element) {
    var headingImage = element.querySelector('.heading-image');
    // Restore to the original source
    headingImage.src = "Images/Icon-29.png";
}

// JavaScript to change the heading image on hover and restore on mouseout
function changeHeadingImage2(element, newSrc) {
    var headingImage = element.querySelector('.heading-image');
    headingImage.src = newSrc;
}

function restoreHeadingImage2(element) {
    var headingImage = element.querySelector('.heading-image');
    // Restore to the original source
    headingImage.src = "Images/Icon-19.png";
}

    // JavaScript to change the heading image on hover and restore on mouseout
    function changeHeadingImage3(element, newSrc) {
        var headingImage = element.querySelector(".heading-image");
        headingImage.src = newSrc;
    }

    function restoreHeadingImage3(element) {
        var headingImage = element.querySelector(".heading-image");
        headingImage.src = "Images/Icon-21.png";
    }

    // JavaScript to change the heading image on hover and restore on mouseout
    function changeHeadingImage4(element, newSrc) {
        var headingImage = element.querySelector(".heading-image");
        headingImage.src = newSrc;
    }

    function restoreHeadingImage4(element) {
        var headingImage = element.querySelector(".heading-image");
        headingImage.src = "Images/Icon-23.png";
    }

        // JavaScript to change the heading image on hover and restore on mouseout
    function changeHeadingImage5(element, newSrc) {
        var headingImage = element.querySelector(".heading-image");
        headingImage.src = newSrc;
    }

    function restoreHeadingImage5(element) {
        var headingImage = element.querySelector(".heading-image");
        headingImage.src = "Images/Icon-42.png";
    }

    // JavaScript to change the close button image in the popup on hover and restore on mouseout
    function changeCloseButtonImage(newSrc, popupId) {
        var closeButton = document.getElementById("closeButton" + popupId);
        closeButton.src = newSrc;
    }

    function restoreCloseButtonImage(popupId) {
        var closeButton = document.getElementById("closeButton" + popupId);
        closeButton.src = "Images/Icon-27.png";
    }

function scrollToSection(sectionId, event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY;
        
        // Scroll to the target section with a custom offset
        window.scrollTo({
            top: offsetTop - 180, // Adjust the offset as needed
            behavior: 'smooth',
        });
    }
}

function scrollToTop(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}