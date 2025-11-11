async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postFilename = urlParams.get('post');
    
    if (!postFilename) {
        document.getElementById('post-content').innerHTML = 
            '<p class="loading">No post specified.</p>';
        return;
    }
    
    try {
        const response = await fetch(`posts/${postFilename}`);
        const markdownText = await response.text();
        
        const { frontmatter, content } = parseFrontmatter(markdownText);
        
        const htmlContent = marked.parse(content);
        
        let metaHTML = '';
        if (frontmatter.date || frontmatter.author || frontmatter.category) {
            metaHTML = '<div class="post-meta">';
            
            if (frontmatter.date) {
                const date = new Date(frontmatter.date);
                const formattedDate = date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                metaHTML += `<span>📅 ${formattedDate}</span>`;
            }
            
            if (frontmatter.author) {
                metaHTML += `<span>✍️ ${frontmatter.author}</span>`;
            }
            
            if (frontmatter.category) {
                metaHTML += `<span>📁 ${frontmatter.category}</span>`;
            }
            
            metaHTML += '</div>';
        }
        
        let tagsHTML = '';
        if (frontmatter.tags && frontmatter.tags.length > 0) {
            tagsHTML = '<div class="post-tags">';
            frontmatter.tags.forEach(tag => {
                tagsHTML += `<span class="tag">${tag}</span>`;
            });
            tagsHTML += '</div>';
        }
        
        document.getElementById('post-content').innerHTML = `
            <h1>${frontmatter.title || 'Untitled Post'}</h1>
            ${metaHTML}
            ${tagsHTML}
            <div class="post-body">
                ${htmlContent}
            </div>
        `;
        
        document.title = frontmatter.title || 'Blog Post';
        
    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('post-content').innerHTML = 
            '<p class="loading">Error loading post. Please check the console.</p>';
    }
}

function parseFrontmatter(markdown) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);
    
    if (!match) {
        return {
            frontmatter: {},
            content: markdown
        };
    }
    
    const frontmatterText = match[1];
    const content = match[2];
    
    const frontmatter = {};
    const lines = frontmatterText.split('\n');
    
    let currentKey = null;
    let currentArray = null;
    
    lines.forEach(line => {
        if (line.trim().startsWith('-')) {
            if (currentArray) {
                currentArray.push(line.trim().substring(1).trim());
            }
        } else if (line.includes(':')) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            
            currentKey = key.trim();
            
            if (value === '') {
                currentArray = [];
                frontmatter[currentKey] = currentArray;
            } else {
                frontmatter[currentKey] = value.replace(/^["']|["']$/g, '');
                currentArray = null;
            }
        }
    });
    
    return { frontmatter, content };
}

document.addEventListener('DOMContentLoaded', loadPost);
