window.onload = function() {
    // URL of the file you want to download from GitHub Pages
    const fileUrl = 'https://yourusername.github.io/yourrepository/path/to/your/example.txt';

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume_Mynuddin';  // Name of the file to be downloaded

    // Append the anchor element to the body (required for Firefox)
    document.body.appendChild(a);

    // Programmatically click the anchor element
    a.click();

    // Remove the anchor element from the document
    document.body.removeChild(a);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substr(1);
            const targetElement = document.getElementById(targetId);
            
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

function openGoogleForm(){
    window.open('https://forms.gle/MKCop3yjCXzD4jMy8','_blank')
}
