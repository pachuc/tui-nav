/**
 * Global Keyboard Navigation
 *
 * Provides keyboard shortcuts for navigation across the entire site:
 * - Left arrow: Navigate up in logical hierarchy
 * - Right arrow: Same as Enter (follow link)
 * - Escape: Return to homepage
 */

(function() {
  'use strict';

  /**
   * Determine the parent page in the logical hierarchy
   */
  function getParentPage() {
    const path = window.location.pathname;

    // Homepage - no parent
    if (path === '/') {
      return null;
    }

    // Remove trailing slash for easier matching
    const cleanPath = path.replace(/\/$/, '');
    const segments = cleanPath.split('/').filter(Boolean);

    // If we have segments, go up one level
    if (segments.length > 1) {
      segments.pop();
      return '/' + segments.join('/') + '/';
    }

    // Single segment paths (like /about, /projects) go to home
    return '/';
  }

  /**
   * Handle global keyboard events
   */
  function handleGlobalKeydown(event) {
    // Check if user is typing in an input field
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable) {
      return;
    }

    // Don't interfere with keyboard nav on pages that have it
    const hasKeyboardNav = document.querySelector('.keyboard-nav-list');

    switch(event.key) {
      case 'ArrowLeft':
        // Navigate up in logical hierarchy
        event.preventDefault();
        const parentPage = getParentPage();
        if (parentPage) {
          window.location.href = parentPage;
        }
        // If no parent (we're at home), do nothing
        break;

      case 'ArrowRight':
        // On pages with keyboard nav, let keyboard-nav.js handle it
        if (hasKeyboardNav) {
          return; // Don't prevent default, let keyboard-nav.js handle it
        }
        // On other pages, could navigate to next post or do nothing
        event.preventDefault();
        break;

      case 'Escape':
        // Return to homepage
        event.preventDefault();
        window.location.href = '/';
        break;

      case 'h':
      case 'H':
        // Quick shortcut to home
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          window.location.href = '/';
        }
        break;
    }
  }

  /**
   * Initialize global navigation
   */
  function init() {
    document.addEventListener('keydown', handleGlobalKeydown);
    console.log('Global keyboard navigation initialized');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
