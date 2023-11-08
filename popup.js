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
    }, 500); // Adjust the delay time as needed
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
