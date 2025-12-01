/**
 * Title Letter Animation - Register/Odometer Tick Effect
 * Animates specific letters with a rolling effect and random colors
 *
 * Configuration via window.tuiNavConfig:
 * - titleAnimationLetters: array of letters to animate (default: ['a', 'r', 't'])
 * - titleAnimationColors: array of colors to cycle through
 */

(function() {
  'use strict';

  // Get configuration from window or use defaults
  const config = window.tuiNavConfig || {};

  // Helper to parse JSON strings or return arrays as-is
  function parseIfString(value, defaultValue) {
    if (!value) return defaultValue;
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return defaultValue;
      }
    }
    return value;
  }

  // Colors for the random cycle (terminal-inspired palette)
  const defaultColors = [
    '#00ff00', // bright green
    '#00ffff', // cyan
    '#ff00ff', // magenta
    '#ffff00', // yellow
    '#ff6b6b', // red
    '#4ecdc4', // teal
    '#95e1d3', // mint
    '#f38181', // pink
    '#aa96da', // purple
    '#fcbad3', // light pink
    '#ffffd2', // cream
    '#a8e6cf', // light green
  ];
  const colors = parseIfString(config.titleAnimationColors, defaultColors);

  // Letters to animate
  const lettersToAnimate = parseIfString(config.titleAnimationLetters, ['a', 'r', 't']);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function wrapLettersInTitle() {
    const titleElement = document.querySelector('.site-title');
    if (!titleElement) return null;

    const text = titleElement.textContent;
    let wrappedHTML = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (lettersToAnimate.includes(char.toLowerCase())) {
        wrappedHTML += `<span class="letter-wrapper"><span class="letter-slot color-cycle" data-letter="${char}">${char}</span></span>`;
      } else {
        wrappedHTML += char;
      }
    }

    titleElement.innerHTML = wrappedHTML;
    return titleElement;
  }

  function animateLetter(letterElement) {
    // Add rolling animation class
    letterElement.classList.add('letter-rolling');

    // Change color during the roll
    setTimeout(() => {
      letterElement.style.setProperty('color', getRandomColor(), 'important');
    }, 150); // Midway through the animation

    // Remove animation class after it completes
    setTimeout(() => {
      letterElement.classList.remove('letter-rolling');
    }, 400);
  }

  function startRegisterAnimation() {
    const letterSlots = document.querySelectorAll('.letter-slot');
    if (letterSlots.length === 0) return;

    // Apply initial colors immediately
    letterSlots.forEach((slot) => {
      slot.style.setProperty('color', getRandomColor(), 'important');
    });

    // Initial animation - stagger the first appearance
    letterSlots.forEach((slot, i) => {
      setTimeout(() => {
        animateLetter(slot);
      }, i * 200);
    });

    // Continuous animation loop
    setInterval(() => {
      // Animate one random letter at a time
      const randomSlot = letterSlots[Math.floor(Math.random() * letterSlots.length)];
      animateLetter(randomSlot);
    }, 2000); // Tick every 2 seconds

    // Occasionally animate all letters together
    setInterval(() => {
      letterSlots.forEach((slot, i) => {
        setTimeout(() => {
          animateLetter(slot);
        }, i * 100);
      });
    }, 8000); // All letters every 8 seconds
  }

  function init() {
    const titleElement = wrapLettersInTitle();

    if (titleElement) {
      startRegisterAnimation();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
