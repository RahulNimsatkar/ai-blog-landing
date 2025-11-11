async function loadBlogPosts() {
    try {
        const response = await fetch('posts/posts.json');
        const posts = await response.json();
        
        const blogPostsContainer = document.getElementById('blog-posts');
        blogPostsContainer.innerHTML = '';
        
        if (posts.length === 0) {
            blogPostsContainer.innerHTML = '<p class="loading">No blog posts yet.</p>';
            return;
        }
        
        posts.forEach(post => {
            const postCard = createPostCard(post);
            blogPostsContainer.appendChild(postCard);
        });
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        document.getElementById('blog-posts').innerHTML = 
            '<p class="loading">Error loading blog posts. Please check the console.</p>';
    }
}

function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    let tagsHTML = '';
    if (post.tags && post.tags.length > 0) {
        tagsHTML = '<div class="post-tags">';
        post.tags.forEach(tag => {
            tagsHTML += `<span class="tag">${tag}</span>`;
        });
        tagsHTML += '</div>';
    }
    
    card.innerHTML = `
        <h2><a href="post.html?post=${post.filename}">${post.title}</a></h2>
        <div class="post-meta">
            <span>📅 ${formattedDate}</span>
            ${post.author ? `<span>✍️ ${post.author}</span>` : ''}
            ${post.category ? `<span>📁 ${post.category}</span>` : ''}
        </div>
        <p class="post-description">${post.description || 'Click to read more...'}</p>
        ${tagsHTML}
        <a href="post.html?post=${post.filename}" class="read-more">Read more →</a>
    `;
    
    return card;
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);
