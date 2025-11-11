# Blog Website

A clean, modern blog website that displays markdown files as beautiful blog posts.

## Features

- 📝 Displays markdown (.md) files as formatted blog posts
- 🎨 Modern, responsive design
- 📱 Mobile-friendly layout
- 🏷️ Support for tags, categories, and metadata
- ⚡ Fast and lightweight
- 🎯 Easy to customize

## How It Works

This blog website reads markdown files from the `posts/` folder and displays them as blog posts. Each markdown file includes frontmatter (metadata) at the top.

### Frontmatter Format

Each blog post should start with frontmatter in this format:

```markdown
---
title: Your Post Title
date: 2025-11-11
author: Your Name
category: Category Name
tags:
  - Tag1
  - Tag2
  - Tag3
description: A brief description of your post
---

# Your Post Title

Your content goes here...
```

## File Structure

```
blog-website/
├── index.html           # Home page (lists all posts)
├── post.html           # Individual post viewer
├── css/
│   └── style.css       # Styling
├── js/
│   ├── blog.js         # Home page logic
│   └── post.js         # Post viewer logic
├── posts/
│   ├── posts.json      # List of all posts
│   └── *.md           # Your markdown blog posts
└── images/            # Images for your posts
```

## Adding New Blog Posts

1. Create a new markdown file in the `posts/` folder
2. Add frontmatter at the top (see format above)
3. Write your content using markdown
4. Add the post info to `posts/posts.json`

### Example posts.json Entry

```json
{
  "filename": "2025-11-11-my-new-post.md",
  "title": "My New Post",
  "date": "2025-11-11",
  "author": "Your Name",
  "category": "Tutorial",
  "description": "This is my new blog post",
  "tags": ["Tutorial", "Example"]
}
```

## Running Locally

You can run this blog locally using any static file server:

### Option 1: Python
```bash
cd blog-website
python -m http.server 5000
```

### Option 2: Node.js
```bash
cd blog-website
npx http-server -p 5000
```

### Option 3: PHP
```bash
cd blog-website
php -S localhost:5000
```

Then open http://localhost:5000 in your browser.

## Uploading to GitHub

1. Create a new repository on GitHub
2. Initialize git in the blog-website folder:
   ```bash
   cd blog-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

## GitHub Pages Deployment

You can host this blog for free on GitHub Pages:

1. Push your code to GitHub (see above)
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select "main" branch as source
5. Click "Save"

Your blog will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Customization

### Changing Colors

Edit `css/style.css` and update the CSS variables:

```css
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Change to your colors */
header {
    background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

### Changing Site Title

Edit `index.html`:

```html
<h1>My Blog</h1>
<p class="tagline">Welcome to my awesome blog</p>
```

### Adding Images to Posts

1. Save images in the `images/` folder
2. Reference them in your markdown:

```markdown
![Alt text](images/your-image.jpg)
```

## Markdown Support

This blog supports full markdown syntax:

- Headers (# ## ###)
- **Bold** and *italic* text
- Lists (ordered and unordered)
- Links
- Images
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- And more!

See the sample posts for examples.

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use for personal or commercial projects.

## Support

For issues or questions, check the code or create an issue on GitHub.

---

**Enjoy your new blog!** 🚀
