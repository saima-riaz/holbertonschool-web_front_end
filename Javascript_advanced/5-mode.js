function changeMode(size, weight, transform, background, color) {
    return function () {
        body.style.fontSize = size + 'px';
        body.style.fontWeight = weight;
        body.style.testTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    }
}
function main() {
    // Create theme functions using closures
    let spooky = changeMode(9, bold, uppercase, pink, green)
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);

    function setupPage() {
        let paragraph = document.createElement('p');
        paragraph.textContent = "Welcome Holberton!";
        body.appendChild(paragraph);

        //for button spooky//
        let button1 = document.createElement('button');
        button1.textContent = "Spooky";
        button1.onclick = spookyMode;
        body.appendChild(button1);

        //for button Dark Mood//
        let button2 = document.createElement('button');
        button2.textContent = "Dark mode";
        button2.onclick = darkMode;
        body.appendChild(button2);
        
        //for button Scream mode//
        let button3 = document.createElement('button');
        button3.textContent = "Scream mode";
        button3.onclick = screamMode;
        body.appendChild(button3);
    }
    main();
}