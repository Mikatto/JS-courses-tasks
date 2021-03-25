n = prompt(`Введите число`, 10);

prev = 1;
console.log(prev);
current = 1;
console.log(current);

for (let i = 2; i < n; i++) {
    next = prev + current;
    console.log(next);
    prev = current;
    current = next;
}

alert(`Числом Фибоначчи от ${n} является: `+current)