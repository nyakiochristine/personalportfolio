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
