    //newsPosts.reverse();

    // Variables to keep track of the current page and total number of pages

    function displayRecentNews() {
        const recentNewsSection = document.querySelector('.latest-news');
        recentNewsSection.innerHTML = '';

        const recentPosts = newsPosts.slice(0, 5);
        for (let i = 0; i < recentPosts.length; i++) {
            const post = recentPosts[i];
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Create a link for each latest news post
            const postLink = document.createElement('a');
            postLink.href = post.url; // Replace "post.html" with your actual post page URL
            //postLink.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            postLink.innerHTML = `<h6 class="text-left"><span id="date">${post.date}</span></h6><p>${post.title}</p>`;
            postDiv.appendChild(postLink);

            recentNewsSection.appendChild(postDiv);
        }
    }


    // Call the functions to display the initial content
    displayRecentNews();