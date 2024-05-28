window.onload = function() {
    const fileUrl = 'https://iam-mynuddin.github.io/MynuddinSK/Resume%20(8).pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume_Mynuddin';
    document.body.appendChild(a);
    //a.click();//pending
    document.body.removeChild(a);
};
$('[data-bs-toggle="collapse"]').on('click', function () {
    let icon = $('#toggle-icon');
    if (icon.hasClass('fa-arrow-down')) {
        icon.removeClass('fa-arrow-down').addClass('fa-arrow-up');
    } else {
        icon.removeClass('fa-arrow-up').addClass('fa-arrow-down');
    }
});

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

function openGithub(name) {
    let url = '';
    switch (name) {
        case 'ReactApp':
            url = 'https://github.com/iam-mynuddin/ReStore';
            
        case 'AngularApp':
            url = 'https://github.com/iam-mynuddin/CollegeManagement';
            
        case 'AspApp':
            url = 'https://github.com/iam-mynuddin/ShoppingApplication';
        window.open(url, '_blank')
    }
}
function openProject(name) {
    alert("Sorry, I have not deployed this project yet!");
}
