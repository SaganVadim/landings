
// Featured Products Slider
const gearSlider = document.querySelector('.gearSlider');
if (gearSlider) {
    const gearTrack = gearSlider.querySelector('.sliderTrack');
    const gearItems = gearTrack.querySelectorAll('.sliderItem');
    const gearPrev = gearSlider.querySelector('.sliderPrev');
    const gearNext = gearSlider.querySelector('.sliderNext');
    let gearIndex = 0;

    function updateGearSlider() {
        gearTrack.style.transform = `translateX(-${gearIndex * 100}%)`;
    }

    gearNext.addEventListener('click', () => {
        gearIndex = (gearIndex + 1) % gearItems.length;
        updateGearSlider();
    });

    gearPrev.addEventListener('click', () => {
        gearIndex = (gearIndex - 1 + gearItems.length) % gearItems.length;
        updateGearSlider();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        gearIndex = (gearIndex + 1) % gearItems.length;
        updateGearSlider();
    }, 5000);
}

// Testimonials Slider
const voiceSlider = document.querySelector('.voiceSlider');
if (voiceSlider) {
    const voiceTrack = voiceSlider.querySelector('.voiceTrack');
    const voiceItems = voiceTrack.querySelectorAll('.voiceItem');
    const voicePrev = voiceSlider.querySelector('.voicePrev');
    const voiceNext = voiceSlider.querySelector('.voiceNext');
    let voiceIndex = 0;

    function updateVoiceSlider() {
        voiceTrack.style.transform = `translateX(-${voiceIndex * 100}%)`;
    }

    voiceNext.addEventListener('click', () => {
        voiceIndex = (voiceIndex + 1) % voiceItems.length;
        updateVoiceSlider();
    });

    voicePrev.addEventListener('click', () => {
        voiceIndex = (voiceIndex - 1 + voiceItems.length) % voiceItems.length;
        updateVoiceSlider();
    });

    // Auto-slide every 6 seconds
    setInterval(() => {
        voiceIndex = (voiceIndex + 1) % voiceItems.length;
        updateVoiceSlider();
    }, 6000);
}

// Seasonal Gear Tabs
const tabButtons = document.querySelectorAll('.tabButton');
if (tabButtons.length > 0) {
    const tabPanes = document.querySelectorAll('.tabPane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const pane = document.getElementById(tabId);
            if (pane) {
                pane.classList.add('active');
            }
        });
    });
}

// WOW.js Initialization
document.addEventListener("DOMContentLoaded", function () {
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    } else {
        console.warn('WOW.js is not loaded. Skipping initialization.');
    }
});
