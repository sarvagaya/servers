const express = require("express");
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    }),
    express.json()
)

const users = []

app.post("/check-existing-user", cors(), (req, res) => {
    const { email } = req.body;
        let ans = false;
        for (let i = 0; i <= users.length - 1; i++) {
            if (email === users[i].email) {
                ans = true
                break;
            } else {
                continue;
            }
        }
        res.send(ans)
})

app.get("/", cors(), (req, res) => {
        res.send(users)
})


app.post("/new-user/sign-up", cors(), (req, res) => {
    const { id, email, fullName, userName, password } = req.body;
    const newUser = {
        id,
        email,
        fullName,
        userName,
        password
    }
    users.push(newUser)
    res.send("Account created successfully")
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})