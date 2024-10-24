document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    // Ajusta o tamanho do vídeo para cobrir toda a tela
    function resizeVideo() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const videoRatio = video.videoWidth / video.videoHeight;
        const windowRatio = windowWidth / windowHeight;

        if (windowRatio > videoRatio) {
            video.style.width = '100%';
            video.style.height = 'auto';
        } else {
            video.style.width = 'auto';
            video.style.height = '100%';
        }
    }

    window.addEventListener('resize', resizeVideo);
    video.addEventListener('loadedmetadata', resizeVideo);
});