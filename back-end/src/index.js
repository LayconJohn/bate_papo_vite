import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": process.env.PRIVATE_KEY}}
        );
        return res.status(response.status).send(response.data);
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
});

app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
})
