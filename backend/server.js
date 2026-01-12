import express from "express";
import cors from "cors"; 

const app = express();
app.use(cors());
app.use(express.json());

let componentsData = {
    header: {
        title: "",
        image: ""
    },
    navbar: [],
    footer: {
        email: "",
        phone: "",
        address: ""
    }
};

app.get("/api/components", (req, res) => {
    res.json(componentsData);
});

app.post("/api/components", (req, res) => {
    componentsData = req.body;
    res.json({ message: "Components data saved successfully"});
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
