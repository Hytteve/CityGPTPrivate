// import fetch from "node-fetch";
// import fs from "fs";

var fetch = require("node-fetch");
var fs = require("fs");

async function query(filename) {
    const data = fs.readFileSync(filename);
    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
        {
            headers: { Authorization: `Bearer ${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}` },
            method: "POST",
            body: data,
        }
    );
    const result = await response.json();
    return result;
}
query("cat.jpeg").then((response) => {
    console.log(JSON.stringify(response));
});
var Output = document.getElementById("Output");
var OutputLine = "<p>" + JSON.stringify(response) + "</p>";
Output.innerHTML += OutputLine;