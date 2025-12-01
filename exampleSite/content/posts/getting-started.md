---
title: "Getting Started with TUI Nav"
date: 2025-11-30
tags: ["tutorial", "hugo"]
---

Welcome to **TUI Nav**, a terminal-inspired Hugo theme.

## Installation

Add the theme to your Hugo site:

```bash
git submodule add https://github.com/pachuc/tui-nav themes/tui-nav
```

Then set `theme = "tui-nav"` in your `hugo.toml`.

## Configuration

The theme is configured via `[params.tuiNav]`:

```toml
[params.tuiNav]
  backgroundColor = "#0a0a0a"
  cursorColor = "#00ff00"

  [[params.tuiNav.homeItems]]
    title = "Posts"
    url = "/posts/"
    description = "Blog"
```

## Navigation

Everything is keyboard-driven:

- `j`/`k` to move up/down
- `Enter` to select
- `←` to go back
- `Escape` for home

Try it now!
