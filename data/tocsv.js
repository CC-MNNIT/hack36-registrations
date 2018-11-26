const fs = require("fs");
let colleges = require("./colleges.json");
let csvString = "";
colleges.forEach(function (college) {
    csvString += college.college + ", " + college.city + "\n";
});
fs.writeFile("colleges.csv", csvString, function (err) {
    if (err) throw err
    console.log("saved!");
})
