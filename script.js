  // Open Donation Overlay
  document.getElementById('opendonoverBtn').addEventListener('click', () => {
    document.getElementById('donationdonover').style.display = 'flex';
});

// Close Donation Overlay
document.getElementById('closedonover').addEventListener('click', () => {
    document.getElementById('donationdonover').style.display = 'none';
});

// Open Account Overlay
document.getElementById('openAccountOverlay').addEventListener('click', () => {
    document.getElementById('accountOverlay').style.display = 'flex';
});

// Close Account Overlay
document.getElementById('closeAccountOverlay').addEventListener('click', () => {
    document.getElementById('accountOverlay').style.display = 'none';
});

// Open SOS Overlay
document.getElementById('openSOSOverlay').addEventListener('click', () => {
    document.getElementById('sosOverlay').style.display = 'flex';
});

// Close SOS Overlay
document.getElementById('closeSOSOverlay').addEventListener('click', () => {
    document.getElementById('sosOverlay').style.display = 'none';
});

// Close Overlays on clicking outside the content
window.addEventListener('click', (e) => {
    const overlays = ['donationdonover', 'accountOverlay', 'sosOverlay'];
    overlays.forEach(id => {
        if (e.target === document.getElementById(id)) {
            document.getElementById(id).style.display = 'none';
        }
    });
});

// Show Tooltip and Copy to Clipboard
document.querySelectorAll('.icon-action').forEach(icon => {
    icon.addEventListener('click', (e) => {
        const textToCopy = e.target.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy);
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-popup');
        tooltip.innerText = 'Copied';
        e.target.parentNode.appendChild(tooltip);
        tooltip.style.display = 'block';
        setTimeout(() => {
            tooltip.remove();
        }, 1500);
    });
});

// indexvid
function playVideo() {
    document.getElementById('video-overlay').style.display = 'flex';
}

function closeVideo() {
    document.getElementById('video-overlay').style.display = 'none';
}

// Open vid Overlay
document.getElementById('video-overlay').addEventListener('click', () => {
    document.getElementById('video-overlay').style.display = 'flex';
});

// Close vid Overlay
document.getElementById('video-overlay').addEventListener('click', () => {
    document.getElementById('video-overlay').style.display = 'none';
});





// shortcut

// Open Overlays
document.getElementById('scdonateBtn').addEventListener('click', () => {
    document.getElementById('scdonateOverlay').style.display = 'flex';
});

document.getElementById('scadmissionBtn').addEventListener('click', () => {
    document.getElementById('scadmissionOverlay').style.display = 'flex';
});

document.getElementById('sccontactBtn').addEventListener('click', () => {
    document.getElementById('sccontactOverlay').style.display = 'flex';
});

// Close Overlays
function sccloseOverlay(event) {
    if (event.target.classList.contains('scoverlay')) {
        event.target.style.display = 'none';
    }
}

function sccloseDonateOverlay() {
    document.getElementById('scdonateOverlay').style.display = 'none';
}

function sccloseAdmissionOverlay() {
    document.getElementById('scadmissionOverlay').style.display = 'none';
}

function sccloseContactOverlay() {
    document.getElementById('sccontactOverlay').style.display = 'none';
}

// JavaScript for toggling overlay
const reviewBtn = document.getElementById('screviewBtn');
const overlay = document.getElementById('screviewOverlay');
const closeOverlay = document.getElementById('sccloseOverlay');

reviewBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});







// service text+img
function toggleText() {
    const text = document.getElementById("moreText");
    const button = document.getElementById("toggleButton");

    if (text.classList.contains("expanded")) {
      text.classList.remove("expanded");
      button.textContent = "Load More";
    } else {
      text.classList.add("expanded");
      button.textContent = "View Less";
    }
  }









    // job apply
  const applyButton = document.getElementById('apl-applyButton');
    const categoryOverlay = document.getElementById('apl-categoryOverlay');
    const formOverlay = document.getElementById('apl-formOverlay');
    const backArrow = document.getElementById('apl-backArrow');

    // Show category selection overlay
    applyButton.addEventListener('click', () => {
        categoryOverlay.style.display = 'flex';
    });

    // Show form overlay on category click
    document.querySelectorAll('.apl-category-button').forEach(button => {
        button.addEventListener('click', () => {
            categoryOverlay.style.display = 'none';
            formOverlay.style.display = 'flex';
        });
    });

    // Go back to category selection
    backArrow.addEventListener('click', () => {
        formOverlay.style.display = 'none';
        categoryOverlay.style.display = 'flex';
    });

    // Close overlay on click outside the content
    document.querySelectorAll('.apl-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });
















// Function to animate numbers
     // Function to animate numbers
     const animateNumbers = () => {
        const trackerNumbers = document.querySelectorAll('.tracker-number');

        trackerNumbers.forEach((tracker) => {
            const target = +tracker.getAttribute('data-target');
            const increment = target / 150; // Adjust increment for 1.5 seconds

            let start = Math.floor(Math.random() * (target / 2)); // Random offset start
            const updateNumber = () => {
                start += increment;

                if (start >= target) {
                    tracker.textContent = target;
                } else {
                    tracker.textContent = Math.floor(start);
                    setTimeout(updateNumber, 10); // Controls speed
                }
            };

            updateNumber();
        });
    };

    // Call the function on page load
    window.onload = animateNumbers;