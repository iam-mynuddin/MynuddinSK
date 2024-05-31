window.onload = function() {
    console.log('Window loaded');
};

function downloadResume() {

    getResume();
    const fileUrl = 'https://iam-mynuddin.github.io/MynuddinSK/Resume%20(8).pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume_Mynuddin';
    document.body.appendChild(a);
    a.click();//pending
    document.body.removeChild(a);  
}

function getResume() {
        const pdfUrl = 'https://iam-mynuddin.github.io/MynuddinSK/Resume%20(8).pdf';

        fetch(pdfUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'DotNet_React_MynuddinSK_Resume.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    
}

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

function openProfile(handleName) {
    let url = '';
    switch (handleName) {
        case 'fb':
            url = 'https://www.facebook.com/iammynuddin';
            break; // Add break statement to prevent fall-through
        case 'ig':
            url = 'https://www.instagram.com/sk.mynuddin/';
            break; // Add break statement to prevent fall-through
        case 'ln':
            url = 'https://www.linkedin.com/in/mynuddinsk/';
            break; // Add break statement to prevent fall-through
        case 'mail':
            startMail();
    }
    window.open(url, '_blank'); // Open the URL in a new tab
}

function startMail() {
    alert('Reach out to me at mynuddin.shaik234@gmail.com');
}


function openProject(name) {
    alert("Sorry, I have not deployed this project yet!");
}
