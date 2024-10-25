const trickOrTreatBag = [
    { name: "a chocolate bar", image: "Images/Choc.png" },
    { name: "gummy bears", image: "Images/GummyBears.png" },
    { name: "a twix", image: "Images/Twix.png" },
    { name: "candy corn", image: "Images/CandyCorn.png" },
    { name: "kitkats", image: "Images/KitKat.png" }
];

function getRandomCandy() {
    const randomIndex = Math.floor(Math.random() * trickOrTreatBag.length);
    const selectedCandy = trickOrTreatBag[randomIndex];

    const candyImage = document.getElementById("candyImage");
    candyImage.src = selectedCandy.image;
    candyImage.alt = selectedCandy.name; 

    const candyNameElement = document.getElementById("candyName");
    candyNameElement.textContent = `You got ${selectedCandy.name}!`; 
}

