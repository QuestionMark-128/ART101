let environmentTitle = "Alone on the Waters";

let environmentElements = ["Dark", "Wet", "Cold", "Quiet"];

let mainEntity = {
    name: "The Depths",
    type: "soft border",
    mood: "suspicious",
    SharkCount: "four",
    isMoving: true,
    favoriteElement: environmentElements[1],
};

let tips = [
    "Its very cold, you should bundle up and stay warm.",
    "There are at least 4 sharks in the water, swimming would be a death sentence.",
    "Maybe those the water is more shallow by those rocks?",
    "Figure it out yourself stop bothering me!"
];

let count = 0;
let sosCount = 0;

$(document).ready(function () {
    let infoCount = 0;
    
    $("#info-button").click(function  () {
        infoCount = infoCount + 1;

        let arrayPosition = (infoCount - 1) % environmentElements.length;
        let currentElement = environmentElements[arrayPosition];

        let message = `
            <h2>${environmentTitle}</h2>

            <h3>Info</h3>
            <p><strong>Name:</strong> ${mainEntity.name}</p>
            <p><strong>Type:</strong> ${mainEntity.type}</p>
            <p><strong>Mood:</strong> ${mainEntity.mood}</p>
            <p><strong>Sharks:</strong> ${mainEntity.SharkCount}</p>
            <p><strong>Moving:</strong> ${mainEntity.isMoving}</p>
            <p><strong>Element:</strong>
            ${currentElement}</p>
        `;

        $("#infoContent").html(message);
        $("#infoPanel").stop(true, true).fadeIn();
    });

    $("#help-button").click(function () {
        let currentTip = tips[count % tips.length];

        let message = `
            <h2>Tip Number ${(count % tips.length) + 1}</h2>
            <p>${currentTip}</p>
        `;

        count++;

        $("#infoContent").html(message);
        $("#infoPanel").stop(true, true).fadeIn();
    });

    $("#sos-button").click(function () {
        sosCount++;

        let message = `
            <h2>Distress Signal</h2>
            <p>SOS messages sent: ${sosCount}</p>
            <p>You hope someone can hear you...</p>
        `;

        $("#infoContent").html(message);
        $("#infoPanel").stop(true, true).fadeIn();
    });

    $("#closePanel").click(function () {
        $("#infoPanel").fadeOut();
    });
});