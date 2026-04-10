# Simple Calculator 🧮

A clean, fully functional calculator built with vanilla HTML, CSS, and JavaScript.

## Features

- Basic operations: Add, Subtract, Multiply, Divide
- Advanced functions: `%`, `x²`, `√`, `1/x`, `( )`
- Smart parenthesis toggle — auto-opens or closes based on context
- Live expression shown above the result
- Error handling for division by zero and invalid inputs
- Glassmorphism UI with a purple/teal/amber color scheme

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0–9` | Input number |
| `+ - * /` | Operators |
| `.` | Decimal point |
| `( )` | Parenthesis |
| `%` | Percentage |
| `Enter` or `=` | Calculate |
| `Backspace` | Delete last character |
| `Escape` | Clear all |

## Project Structure

```
├── index.html   # Markup & button layout
├── style.css    # Glassmorphism styling & color theme
└── calc.js      # Calculator logic (no eval — custom parser)
```

## Usage

Just open `index.html` in any modern browser. No dependencies, no build step.
