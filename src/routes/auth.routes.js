const express = require("express");
const router = express.Router();
const { authSignupController, authLoginController, authLogoutController, authGetUserController } = require("../controller/auth.controller");

router.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body;
    // console.log(name, email, password, role)

    let data = await authSignupController(name, email, password, role);
    res.status(data.status).send(data.payload)
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    let data = await authLoginController(email, password);
    res.status(data.status).send(data.payload)

})


router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { token } = req.headers;

    let data = await authGetUserController(token);
    res.status(data.status).send(data.payload)
})

router.post("/logout", (req, res) => {
    const { token } = req.headers;
    let data = authLogoutController(token);
    res.status(data.status).send(data.payload)
})



module.exports = router;