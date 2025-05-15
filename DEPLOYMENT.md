# Deploying "Beauty is in the Eyes of the Bipolar" on Netlify

This guide will help you deploy the "Beauty is in the Eyes of the Bipolar" blog on Netlify.

## Prerequisites
- A Netlify account (free at [netlify.com](https://netlify.com))
- Git repository with your website files (optional but recommended)

## Deployment Options

### Option 1: Deploy via Git Repository (Recommended)
1. Push your website files to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Netlify account
3. Click "New site from Git"
4. Choose your Git provider and authorize Netlify
5. Select your repository
6. Configure build settings:
   - Build command: leave blank (no build required for this static site)
   - Publish directory: `/` (root directory)
7. Click "Deploy site"

### Option 2: Deploy via Direct Upload
1. Log in to your Netlify account
2. Go to the "Sites" section
3. Drag and drop the entire project folder onto the indicated area
4. Wait for the upload to complete
5. Your site will be deployed automatically

## Custom Domain Setup (Optional)
1. After deployment, go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Enter your domain name and follow the instructions
4. Update your domain's DNS settings to point to Netlify

## Important Notes
- Make sure to replace all placeholder images in the `images` directory with real images before final deployment
- Update all placeholder content with your actual blog content
- Test all forms and functionality after deployment

## Support
If you encounter any issues with deployment, refer to the [Netlify documentation](https://docs.netlify.com/) or contact Netlify support. 