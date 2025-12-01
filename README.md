# TUI Nav

TUIs are all the rage today. I wanted to create one for my own personal website.
Some choices, such as the animated colorful title, maybe is not quite on theme
but is a personal choice for my own website aesthetic.

## Features

- **Keyboard Navigation**: Navigate your site using keyboard shortcuts
  - `j` / `↓` - Move down
  - `k` / `↑` - Move up
  - `Enter` / `→` - Open selected item
  - `←` - Go back (up hierarchy)
  - `Escape` - Return to homepage
  - `Home` / `End` - Jump to first/last
  - `PageUp` / `PageDown` - Jump by 5 items

## Quick Start (Demo)

Try the theme without installing:

```bash
cd tui-nav/exampleSite
hugo server --themesDir ../..
```

Then open http://localhost:1313 and use arrow keys to navigate.

## Installation

### Option 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git submodule add https://github.com/pachuc/tui-nav themes/tui-nav
```

### Option 2: Direct Copy

Copy the `tui-nav` folder into your site's `themes/` directory.

## Configuration

In your `hugo.toml`:

```toml
theme = "tui-nav"

[params.tuiNav]
  # Colors (optional - these are defaults)
  backgroundColor = "#0a0a0a"
  textColor = "#e0e0e0"
  cursorColor = "#00ff00"

  # Homepage title (optional, defaults to "Home")
  homeTitle = "Home"

  # Animation (optional)
  cursorBlinkSpeed = "1s"
  titleAnimationLetters = ["a", "r", "t"]
  titleAnimationColors = ["#00ff00", "#00ffff", "#ff00ff", "#ffff00"]

  # Optional QR code on homepage (appears below title)
  # qrCode = "/images/qr-code.png"

  # Optional footer text
  # footerText = "Built with Hugo"

  # Homepage navigation items (required)
  [[params.tuiNav.homeItems]]
    title = "Posts"
    url = "/posts/"
    description = "Blog posts"

  [[params.tuiNav.homeItems]]
    title = "Projects"
    url = "/projects/"
    description = "My work"

  [[params.tuiNav.homeItems]]
    title = "About"
    url = "/about/"
    description = "About me"
```

## Content Structure

The theme works with any standard Hugo content structure:

```
content/
├── posts/
│   ├── _index.md
│   └── my-first-post.md
├── projects/
│   ├── _index.md
│   └── project-one.md
└── about.md
```

## Customization

### Colors

Override colors via `params.tuiNav`:

```toml
[params.tuiNav]
  backgroundColor = "#1a1a2e"  # Dark blue
  textColor = "#eaeaea"
  cursorColor = "#e94560"      # Red cursor
```

### Fonts

Two separate fonts can be configured:

- `fontFamily` - Used for TUI navigation, site title, and all headings (defaults to system monospace)
- `contentFontFamily` - Used for post/page body text (defaults to system sans-serif)

```toml
[params.tuiNav]
  # TUI & headings font
  fontFamily = '"Home Video", ui-monospace, monospace'

  # Content body font
  contentFontFamily = '"Inter", "Helvetica Neue", sans-serif'
```

Code blocks within content always use the TUI font.

### Title Animation

Customize which letters animate and their colors:

```toml
[params.tuiNav]
  titleAnimationLetters = ["o", "g"]  # Animate 'o' and 'g' in your title
  titleAnimationColors = ["#ff6b6b", "#4ecdc4", "#ffe66d"]
```

### Date Format

Standard Hugo date params work:

```toml
[params]
  dateform = "January 2, 2006"
  dateformShort = "Jan 2"
```

## Keyboard Shortcuts Reference

| Key | Action |
|-----|--------|
| `j` or `↓` | Select next item |
| `k` or `↑` | Select previous item |
| `Enter` or `→` | Navigate to selected |
| `←` | Go to parent page |
| `Escape` | Go to homepage |
| `Home` | Select first item |
| `End` | Select last item |
| `PageDown` | Jump forward 5 items |
| `PageUp` | Jump back 5 items |
| `Ctrl+H` | Go to homepage |


## License

MIT License - see [LICENSE](LICENSE) file.

## Credits

Created by [pachuc](https://pachu.me)
