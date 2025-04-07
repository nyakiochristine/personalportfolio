var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab");
}



document.addEventListener('DOMContentLoaded', function () {
    fetch('blog.json')  // Load blog posts from JSON file
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blog-posts');
            let blogPostsHTML = '';

            posts.forEach(post => {
                blogPostsHTML += `
                    <div class="blog__post">
                        <img src="${post.image}" alt="${post.title}">
                        <h3>${post.title}</h3>
                        <p>${post.summary}</p>
                        <a href="${post.link}" target="_blank">Read More</a>
                    </div>
                `;
            });

            blogPostsContainer.innerHTML = blogPostsHTML;
        })
        .catch(error => console.error('Error loading blog posts:', error));
});

//contact form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Reset error messages
        resetErrors();

        // Validate form
        if (validateForm()) {
            // Simulate form submission (replace with actual submission logic)
            setTimeout(function () {
                document.getElementById('successMessage').textContent = 'Message sent! We will get back to you.';
                document.getElementById('successMessage').style.display = 'block';
                form.reset();
            }, 500); // Simulate a 0.5 second delay
        }
    });

    function validateForm() {
        let isValid = true;

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        // Email validation
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        }

        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function resetErrors() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('successMessage').textContent = ''; // Clear previous success message
    }
});
