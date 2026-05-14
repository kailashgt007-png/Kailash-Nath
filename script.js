// Video Player Logic for Kailash Nath Portfolio

const heroVideo = document.getElementById('hero-video');
const currentTitle = document.getElementById('current-title');
const muteBtn = document.getElementById('mute-btn');

/**
 * Switches the main hero video with a fade transition
 * @param {string} url - The URL of the video to play
 * @param {string} title - The title of the work
 */
function switchVideo(url, title) {
    // Start fade out
    heroVideo.classList.add('video-fade-out');
    
    setTimeout(() => {
        // Change source and title
        const source = heroVideo.querySelector('source');
        source.src = url;
        heroVideo.load();
        
        // Play the new video
        heroVideo.play().catch(e => console.log("Auto-play prevented:", e));
        
        // Update Title
        currentTitle.textContent = title;
        
        // Fade back in
        heroVideo.classList.remove('video-fade-out');
        
        // Scroll to hero if not already visible
        document.getElementById('main-stage').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 500);
}

// Mute/Unmute Toggle
if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        heroVideo.muted = !heroVideo.muted;
        
        // Update Icon (Simple SVG change)
        if (heroVideo.muted) {
            muteBtn.innerHTML = `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
        } else {
            muteBtn.innerHTML = `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
        }
    });
}

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0');
    observer.observe(section);
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('nav .hidden');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-full');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('w-full');
        navLinks.classList.toggle('bg-brand-black');
        navLinks.classList.toggle('p-6');
    });
}
