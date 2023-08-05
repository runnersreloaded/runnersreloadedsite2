    //newsPosts.reverse();

    // Variables to keep track of the current page and total number of pages
    let currentPage = 1;
    const postsPerPage = 20;
    const totalPages = Math.ceil(newsPosts.length / postsPerPage);

    // Function to display the current page of news posts
    function displayNewsPosts(pageNumber) {
        const startIndex = (pageNumber - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;

        const newsPostsSection = document.querySelector('.news-posts');
        newsPostsSection.innerHTML = '';

        for (let i = startIndex; i < endIndex && i < newsPosts.length; i++) {
            const post = newsPosts[i];
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Create a link for each news post
            const postLink = document.createElement('a');
            postLink.href = post.url; // Replace "post.html" with your actual post page URL
            //postLink.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            postLink.innerHTML = `<h6 class="text-left"><span id="date">${post.date}</span></h6><p>${post.title}</p>`;
            postDiv.appendChild(postLink);

            newsPostsSection.appendChild(postDiv);
        }
    }

    // Function to navigate to the previous page
    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            displayNewsPosts(currentPage);
        }
    }

    // Function to navigate to the next page
    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            displayNewsPosts(currentPage);
        }
    }

    function updatePagination() {
        const paginationSection = document.querySelector('.pagination');
        paginationSection.innerHTML = '';

        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.textContent = 'Previous';
        prevLink.onclick = prevPage;
        paginationSection.appendChild(prevLink);

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.onclick = () => goToPage(i);
            if (i === currentPage) {
                pageLink.classList.add('active'); // Add a class to highlight the current page
            }
            paginationSection.appendChild(pageLink);
        }

        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.textContent = 'Next';
        nextLink.onclick = nextPage;
        paginationSection.appendChild(nextLink);
    }



    // Call the functions to display the initial content
    displayNewsPosts(1);
    updatePagination();