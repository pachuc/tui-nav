---
title: "CLI Tools Collection"
date: 2025-01-10
tags: ["cli", "tools"]
---

A collection of command-line utilities.

## Tools

### json-fmt

Pretty-print and validate JSON:

```bash
cat data.json | json-fmt
```

### log-tail

Tail logs with syntax highlighting:

```bash
log-tail /var/log/nginx/access.log --format nginx
```

### git-stats

Repository statistics at a glance:

```bash
git-stats --since="1 month ago"
```

## Installation

```bash
cargo install cli-tools-collection
```
