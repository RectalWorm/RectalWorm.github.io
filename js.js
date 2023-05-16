document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    urlParts.pop();
    const parentUrl = urlParts.join('/');
    const link = document.createElement('a');
    link.href = parentUrl;
    link.textContent = 'выбрать другую дату';
    link.id = 'back'
    document.body.appendChild(link);

    const images = document.querySelectorAll('img.preview');
    images.forEach(image => image.style.filter = 'opacity(0)');
    function checkForIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.filter = 'opacity(1)';
            } else {
                entry.target.style.filter = 'opacity(0)';
            }
        });
    }
    const observer = new IntersectionObserver(checkForIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    });
    images.forEach(image => observer.observe(image));
});
