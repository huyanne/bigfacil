document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('#main-menu');
    const video = document.getElementById('bg-video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    // Add sidebar toggle button if implementing Option 2 for small screens
    // const sidebarToggle = document.getElementById('sidebar-toggle');
    // const sidebar = document.getElementById('sidebar');

    // Mobile Menu Toggle
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            // Optional: Change hamburger icon to 'X' when open
            if (mainMenu.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; // Close icon
                 menuToggle.setAttribute('aria-label', 'Close menu');
            } else {
                menuToggle.innerHTML = '☰'; // Hamburger icon
                 menuToggle.setAttribute('aria-label', 'Toggle menu');
            }
        });
    }

    // Basic Video Controls (Example)
    if (video && playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (video.paused || video.ended) {
                video.play();
                playPauseBtn.textContent = 'Pause';
            } else {
                video.pause();
                playPauseBtn.textContent = 'Play';
            }
        });
    }

    if (video && muteBtn) {
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
        });
    }

     // Update button text based on initial video state (if autoplaying)
    if (video && playPauseBtn && !video.paused) {
         playPauseBtn.textContent = 'Pause';
    }
     if (video && muteBtn && video.muted) {
         muteBtn.textContent = 'Unmute';
    }


    // Close mobile menu if user clicks outside of it (optional)
    document.addEventListener('click', (event) => {
        if (mainMenu && mainMenu.classList.contains('active')) {
            const isClickInsideMenu = mainMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle) {
                mainMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
                 menuToggle.setAttribute('aria-label', 'Toggle menu');
            }
        }
    });

    // Add Sidebar Toggle Logic if needed (Example for Option 2 in CSS)
    /*
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
         // Close sidebar if clicking outside (similar to menu)
         document.addEventListener('click', (event) => {
            if (sidebar.classList.contains('active')) {
                const isClickInsideSidebar = sidebar.contains(event.target);
                const isClickOnSidebarToggle = sidebarToggle.contains(event.target);
                if (!isClickInsideSidebar && !isClickOnSidebarToggle) {
                    sidebar.classList.remove('active');
                }
            }
         });
    }
    */

});
