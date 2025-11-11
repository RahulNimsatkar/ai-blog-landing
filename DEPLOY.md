# Deploy Your Blog to GitHub

Follow these steps to push your blog website to GitHub:

## Step 1: Open Terminal/Shell

Click on the Shell tab in Replit or use your local terminal.

## Step 2: Navigate to blog-website folder

```bash
cd blog-website
```

## Step 3: Initialize Git (if not already done)

```bash
git init
```

## Step 4: Configure Git with your details

```bash
git config user.name "RahulNimsatkar"
git config user.email "your-email@example.com"
```

(Replace with your actual email address)

## Step 5: Add all files

```bash
git add .
```

## Step 6: Commit the files

```bash
git commit -m "Initial commit: Blog website with markdown support"
```

## Step 7: Rename branch to main

```bash
git branch -M main
```

## Step 8: Add GitHub remote

```bash
git remote add origin https://github.com/RahulNimsatkar/awesome-blog-website.git
```

## Step 9: Push to GitHub

You have two options:

### Option A: Using HTTPS with Personal Access Token
```bash
git push -u origin main
```

When prompted for username: Enter `RahulNimsatkar`
When prompted for password: Paste your GitHub Personal Access Token (the one you added to Replit Secrets)

### Option B: Using Token in URL (one command)
```bash
git push https://${GITHUB_TOKEN}@github.com/RahulNimsatkar/awesome-blog-website.git main
```

## Step 10: Verify on GitHub

Go to https://github.com/RahulNimsatkar/awesome-blog-website and you should see all your files!

## Enable GitHub Pages (Optional)

To make your blog live on the internet:

1. Go to your repository: https://github.com/RahulNimsatkar/awesome-blog-website
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your blog will be live at: https://RahulNimsatkar.github.io/awesome-blog-website/

## Updating Your Blog Later

When you add new blog posts:

```bash
cd blog-website
git add .
git commit -m "Add new blog post"
git push
```

---

**Your blog is ready to be published! 🚀**
