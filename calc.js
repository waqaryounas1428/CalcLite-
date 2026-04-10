let expr = '';

const display = document.getElementById('result');
const exprEl  = document.getElementById('expression');

function press(val) {
  expr += val;
  display.textContent = val;
  exprEl.textContent  = expr;
}

function addOp(op) {
  if (!expr) return;
  expr += op;
  exprEl.textContent = expr;
}

function dot() {
  const parts = expr.split(/[+\-*/]/);
  if (parts[parts.length - 1].includes('.')) return;
  expr += '.';
  exprEl.textContent = expr;
}

function paren() {
  const open  = (expr.match(/\(/g) || []).length;
  const close = (expr.match(/\)/g) || []).length;
  expr += open === close ? '(' : ')';
  exprEl.textContent = expr;
}

function percent() {
  const n = parseFloat(expr);
  if (isNaN(n)) return;
  expr = String(n / 100);
  display.textContent = expr;
  exprEl.textContent  = expr;
}

function square() {
  const n = parseFloat(expr);
  if (isNaN(n)) return;
  expr = String(n * n);
  display.textContent = expr;
  exprEl.textContent  = expr;
}

function sqrt() {
  const n = parseFloat(expr);
  if (isNaN(n) || n < 0) return error();
  expr = String(Math.sqrt(n));
  display.textContent = expr;
  exprEl.textContent  = expr;
}

function reciprocal() {
  const n = parseFloat(expr);
  if (!n) return error();
  expr = String(1 / n);
  display.textContent = expr;
  exprEl.textContent  = expr;
}

function sign() {
  expr = expr.startsWith('-') ? expr.slice(1) : '-' + expr;
  display.textContent = expr;
  exprEl.textContent  = expr;
}

function del() {
  expr = expr.slice(0, -1);
  display.textContent = expr || '0';
  exprEl.textContent  = expr;
}

function clear() {
  expr = '';
  display.textContent = '0';
  exprEl.textContent  = '';
}

function error() {
  display.classList.add('error');
  display.textContent = 'Error';
  expr = '';
}

function calculate() {
  if (!expr) return;
  try {
    // close any open parens
    const open  = (expr.match(/\(/g) || []).length;
    const close = (expr.match(/\)/g) || []).length;
    const full  = expr + ')'.repeat(open - close);

    const result = eval(full); // eslint-disable-line
    if (!isFinite(result)) return error();

    exprEl.textContent  = expr + ' =';
    expr = String(parseFloat(result.toPrecision(12)));
    display.classList.remove('error');
    display.textContent = expr;
  } catch {
    error();
  }
}

// Keyboard
document.addEventListener('keydown', e => {
  if (e.key >= '0' && e.key <= '9') press(e.key);
  else if ('+-*'.includes(e.key))    addOp(e.key);
  else if (e.key === '/')            { e.preventDefault(); addOp('/'); }
  else if (e.key === '.')            dot();
  else if (e.key === '(' || e.key === ')') paren();
  else if (e.key === '%')            percent();
  else if (e.key === 'Enter' || e.key === '=') calculate();
  else if (e.key === 'Backspace')    del();
  else if (e.key === 'Escape')       clear();
});
