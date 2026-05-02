// script.js

// Sample data for additional posts
const postsData = [
    {
        title: "Post Title 5",
        date: "September 20, 2023",
        excerpt: "This is another brief excerpt of a different blog post. It gives a summary of what the post is about...",
    },
    {
        title: "Post Title 6",
        date: "September 15, 2023",
        excerpt: "This is another brief excerpt of a different blog post. It gives a summary of what the post is about...",
    },
    {
        title: "Post Title 7",
        date: "September 10, 2023",
        excerpt: "This is another brief excerpt of a different blog post. It gives a summary of what the post is about...",
    },
    {
        title: "Post Title 8",
        date: "September 5, 2023",
        excerpt: "This is another brief excerpt of a different blog post. It gives a summary of what the post is about...",
    },
    // Add more posts as needed
];

// Function to create a post element
function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
        <h2 class="post-title">${post.title}</h2>
        <p class="post-date">${post.date}</p>
        <p class="post-excerpt">${post.excerpt}</p>
        <a href="#" class="read-more">Read more</a>
    `;

    return postElement;
}

// Function to load more posts
function loadMorePosts() {
    const postsGrid = document.querySelector(".posts-grid");
    const startIndex = postsGrid.children.length;
    const endIndex = startIndex + 4;

    for (let i = startIndex; i < endIndex && i < postsData.length; i++) {
        const postElement = createPostElement(postsData[i]);
        postsGrid.appendChild(postElement);
    }


}

// Add event listener to the "Load More" button
document.getElementById("load-more").addEventListener("click", loadMorePosts);
