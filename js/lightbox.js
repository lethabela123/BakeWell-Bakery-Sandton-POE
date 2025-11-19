// Gallery Lightbox Script
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    // Open modal on image click
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.textContent = img.dataset.caption;
            currentIndex = index;
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => modal.style.display = "none");

    // Next/Prev navigation
    function showImage(index) {
        if (index >= images.length) currentIndex = 0;
        else if (index < 0) currentIndex = images.length - 1;
        else currentIndex = index;

        modalImg.src = images[currentIndex].src;
        captionText.textContent = images[currentIndex].dataset.caption;
    }

    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));

    // Close modal when clicking outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.style.display = "none";
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === "block") {
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'Escape') modal.style.display = "none";
        }
    });
});
// Product Gallery Lightbox
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    // Open modal on image click
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.textContent = img.dataset.caption;
            currentIndex = index;
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => modal.style.display = "none");

    // Navigate images
    function showImage(index) {
        if (index >= images.length) currentIndex = 0;
        else if (index < 0) currentIndex = images.length - 1;
        else currentIndex = index;

        modalImg.src = images[currentIndex].src;
        captionText.textContent = images[currentIndex].dataset.caption;
    }

    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));

    // Close modal on click outside
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = "none";
    });

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (modal.style.display === "block") {
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'Escape') modal.style.display = "none";
        }
    });
});
