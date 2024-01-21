document.addEventListener('DOMContentLoaded', function() {
    const pdfFrame = document.getElementById('pdfFrame');
    
    pdfFrame.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    pdfFrame.contentWindow.document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    pdfFrame.addEventListener('mousedown', function(e) {
        e.preventDefault();
    });
});

