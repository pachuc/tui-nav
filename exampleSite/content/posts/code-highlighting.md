---
title: "Code Highlighting Demo"
date: 2025-11-30
tags: ["demo", "code"]
---

The theme includes Prism.js for syntax highlighting.

## JavaScript

```javascript
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10)); // 55
```

## Python

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

## Go

```go
package main

import "fmt"

func main() {
    ch := make(chan int)
    go func() {
        ch <- 42
    }()
    fmt.Println(<-ch)
}
```

## Bash

```bash
#!/bin/bash
for file in *.md; do
    echo "Processing: $file"
    wc -w "$file"
done
```

## YAML

```yaml
server:
  host: localhost
  port: 8080
  tls:
    enabled: true
    cert: /path/to/cert.pem
```
