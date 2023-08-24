for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
for (; i < 10; i++) {
    console.log(i);
}

for (let i = 0; ; i++) {
    console.log(i);
    if (i >= 9) break;
}

i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}
