const app = require("express")();

app.get("/", (req, res) => res.send("Hello World!\nLightweight Node.js app."))

app.listen(9999, () => console.log("Listening on port 9999"))