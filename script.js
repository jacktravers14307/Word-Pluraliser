function pluralthing2() {
    // Get the input value
    const word = document.getElementById("userInput").value;
    const pluralOutput = document.getElementById("pluralOutput");

    // Check if the input is a string
    if (typeof word === "string" && word.trim() !== "") {
        // Convert to lowercase for checking
        const lowerWord = word.toLowerCase();

        if (lowerWord.endsWith("sh") || lowerWord.endsWith("s")) {
            console.log(`${word} is already a plural!`);
            pluralOutput.textContent = `That's already a plural!`;
        } else if (lowerWord.endsWith("ch")) {
            console.log(`Plural for ${word} is: ${word + "es"}`);
            pluralOutput.textContent = `${word + "es"}`;
        } else {
            console.log(`Plural for ${word} is: ${word + "s"}`);
            pluralOutput.textContent = `${word + "s"}`;
        }
    } else {
        console.log(`${word} is not valid.`);
        pluralOutput.textContent = `That is NOT a word!`;
    }
}
