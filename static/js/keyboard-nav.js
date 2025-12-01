/**
 * Keyboard Navigation for Posts List - Carousel View
 *
 * Shows only 5 posts at a time in a carousel-style window:
 * - 2 posts before selected
 * - Selected post (centered)
 * - 2 posts after selected
 *
 * Keyboard-only controls:
 * - Arrow keys (up/down)
 * - Vim-style keys (j/k)
 * - Home/End for first/last
 * - Enter to navigate to selected post
 */

(function() {
  'use strict';

  // Only run if we have the keyboard nav list
  const navList = document.querySelector('.keyboard-nav-list');
  if (!navList) return;

  const items = Array.from(document.querySelectorAll('.keyboard-nav-item'));
  if (items.length === 0) return;

  let currentIndex = 0;

  /**
   * Update which posts are visible in the 5-item carousel window
   */
  function updateVisiblePosts() {
    const totalItems = items.length;

    // Clear all visibility and fade classes
    items.forEach(item => {
      item.classList.remove('visible', 'fade-top', 'fade-bottom', 'fade-middle');
    });

    // Calculate the window of 5 posts to show
    let startIndex, endIndex;

    if (totalItems <= 5) {
      // If 5 or fewer items total, show them all
      startIndex = 0;
      endIndex = totalItems - 1;
    } else if (currentIndex <= 1) {
      // Near the beginning: show first 5
      startIndex = 0;
      endIndex = 4;
    } else if (currentIndex >= totalItems - 2) {
      // Near the end: show last 5
      startIndex = totalItems - 5;
      endIndex = totalItems - 1;
    } else {
      // Middle: show 2 before, selected, 2 after
      startIndex = currentIndex - 2;
      endIndex = currentIndex + 2;
    }

    // Make posts in the window visible and apply fade effects
    for (let i = startIndex; i <= endIndex; i++) {
      items[i].classList.add('visible');

      // Apply fade effects based on distance from selected item
      if (i !== currentIndex) {
        const distance = Math.abs(i - currentIndex);

        if (distance >= 2) {
          // Two or more positions away - strongest fade
          items[i].classList.add('fade-top');
        } else if (distance === 1) {
          // One position away - medium fade
          items[i].classList.add('fade-middle');
        }
        // Items at distance 0 are selected (no fade)
      }
    }
  }

  /**
   * Update the visual selection
   */
  function updateSelection(newIndex) {
    // Bounds checking
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= items.length) newIndex = items.length - 1;

    // Remove selection from all items
    items.forEach(item => item.classList.remove('selected'));

    // Update current index
    currentIndex = newIndex;

    // Add selection to current item
    items[currentIndex].classList.add('selected');

    // Update the visible window
    updateVisiblePosts();
  }

  /**
   * Navigate to the currently selected post
   */
  function navigateToSelected() {
    const selectedItem = items[currentIndex];
    const url = selectedItem.getAttribute('data-url');
    if (url) {
      window.location.href = url;
    }
  }

  /**
   * Handle keyboard events
   */
  function handleKeydown(event) {
    // Check if user is typing in an input field
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable) {
      return;
    }

    switch(event.key) {
      case 'ArrowDown':
      case 'j':
        event.preventDefault();
        updateSelection(currentIndex + 1);
        break;

      case 'ArrowUp':
      case 'k':
        event.preventDefault();
        updateSelection(currentIndex - 1);
        break;

      case 'Home':
        event.preventDefault();
        updateSelection(0);
        break;

      case 'End':
        event.preventDefault();
        updateSelection(items.length - 1);
        break;

      case 'Enter':
      case 'ArrowRight':
        event.preventDefault();
        navigateToSelected();
        break;

      case 'PageDown':
        event.preventDefault();
        updateSelection(Math.min(currentIndex + 5, items.length - 1));
        break;

      case 'PageUp':
        event.preventDefault();
        updateSelection(Math.max(currentIndex - 5, 0));
        break;
    }
  }

  /**
   * Initialize keyboard navigation
   */
  function init() {
    // Set up keyboard event listener
    document.addEventListener('keydown', handleKeydown);

    // Initialize with first item selected
    updateSelection(0);

    console.log('Keyboard-only carousel navigation initialized:', items.length, 'posts (showing 5 at a time)');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
