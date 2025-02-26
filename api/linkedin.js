require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI;

// Step 1: Redirect user to LinkedIn for authentication
app.get("/auth/linkedin", (req, res) => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
    res.redirect(authUrl);
});

// Step 2: Handle LinkedIn OAuth Callback
app.get("/auth/linkedin/callback", async (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.status(400).json({ error: "Authorization code not provided" });
    }

    try {
        const response = await axios.post("https://www.linkedin.com/oauth/v2/accessToken", null, {
            params: {
                grant_type: "authorization_code",
                code: code,
                redirect_uri: REDIRECT_URI,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            },
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const { access_token } = response.data;
        res.json({ accessToken: access_token });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve access token", details: error.response.data });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
