/**
 * Beauty is in the Eyes of the Bipolar - Main JavaScript
 * Handles interactive elements on the blog
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      mobileNavToggle.setAttribute(
        'aria-expanded', 
        mobileNavToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }
  
  // Comment form handling
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, this would send the comment data to a server
      // For demo purposes, we'll simulate adding the comment to the page
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const comment = document.getElementById('comment').value;
      
      if (name && email && comment) {
        addComment(name, comment);
        commentForm.reset();
      }
    });
  }
  
  // Function to add a new comment to the page
  function addComment(name, text) {
    const commentsList = document.querySelector('.comments-list');
    if (!commentsList) return;
    
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const commentHTML = `
      <div class="comment">
        <div class="comment-header">
          <span class="comment-author">${name}</span>
          <span class="comment-date">${formattedDate}</span>
        </div>
        <div class="comment-body">
          <p>${text}</p>
        </div>
      </div>
    `;
    
    commentsList.insertAdjacentHTML('afterbegin', commentHTML);
  }
  
  // Search functionality
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      
      // In a real implementation, this would query a database or search through content
      // For demo purposes, we'll just alert the search term
      alert(`Search for: ${searchTerm}`);
    });
  }
  
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Accessible dropdown menus for categories
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (trigger && menu) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        
        trigger.setAttribute('aria-expanded', !expanded);
        menu.hidden = expanded;
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          trigger.setAttribute('aria-expanded', 'false');
          menu.hidden = true;
        }
      });
    }
  });
  
  // Handle tag filtering on blog page
  const tagButtons = document.querySelectorAll('.tag-filter');
  
  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.getAttribute('data-tag');
      
      // Remove active class from all buttons
      tagButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show/hide posts based on tag
      const posts = document.querySelectorAll('.card');
      
      posts.forEach(post => {
        if (tag === 'all') {
          post.style.display = 'block';
        } else {
          const postTags = post.getAttribute('data-tags').split(',');
          post.style.display = postTags.includes(tag) ? 'block' : 'none';
        }
      });
    });
  });
}); 