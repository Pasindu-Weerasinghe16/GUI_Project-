const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Register user
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        const user = await prisma.user.create({
            data: { username, email, password },
        });
        res.json({ message: "User registered", user });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Username or email already exists" });
    }
});

// Login user
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
