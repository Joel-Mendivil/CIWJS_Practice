// let student = {
//     name: "Chad",
//     height: "6.0",
//     id: 888,
//     favcolor: "Navy Blue"
// };

// let namePrompt = prompt("Enter your name", "Chad");
// student["name"] = namePrompt;

// let heightPrompt = prompt("Enter in a height", "6.0");
// student["height"] = heightPrompt;

// let idPrompt = prompt("Enter your ID", "888");
// student["id"] = idPrompt;

// let colorPrompt = prompt("Enter in your favorite color", "Navy Blue");
// student["favcolor"] = colorPrompt;

function studentAccount(name, height, id, favcolor){
    return{
        name: name,
        height: height,
        id: id,
        favcolor: favcolor
    };
}

let justin = studentAccount("Justin", "5.11", 777, "Red");