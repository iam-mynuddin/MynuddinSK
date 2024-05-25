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
