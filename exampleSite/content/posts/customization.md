---
title: "Theme Customization"
date: 2025-11-30
tags: ["tutorial", "css"]
---

TUI Nav is highly customizable via Hugo configuration.

## Colors

Change the color scheme:

```toml
[params.tuiNav]
  backgroundColor = "#1a1a2e"  # Dark blue
  textColor = "#eaeaea"
  cursorColor = "#e94560"      # Red cursor
```

## Title Animation

Customize which letters animate:

```toml
[params.tuiNav]
  titleAnimationLetters = ["a", "e", "i", "o", "u"]
  titleAnimationColors = ["#ff0000", "#00ff00", "#0000ff"]
```

## Navigation Items

The homepage shows whatever items you configure:

```toml
[[params.tuiNav.homeItems]]
  title = "Gallery"
  url = "/gallery/"
  description = "Photos"

[[params.tuiNav.homeItems]]
  title = "Contact"
  url = "/contact/"
  description = "Get in touch"
```

## CSS Variables

All colors use CSS custom properties, so you can override them globally or per-page if needed.
