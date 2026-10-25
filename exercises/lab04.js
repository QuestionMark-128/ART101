let count = 0;

let buttonCreature = {
    name: ["Needy Button", "Lovely Button", "Mad Button", "Confusing Button", "Button", "Data Button"],
    species: "interface creature",
    favoriteFood: ["clicks", "1's and 0's", "code", "left mouse buttons", "not not clicks"],
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    let currentName = buttonCreature.name[arrayPosition];
    let currentFood = buttonCreature.favoriteFood[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + currentName + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + currentFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    console.log(currentFood);
    console.log(currentName);

});