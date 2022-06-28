const router = require("express").Router();

router.get("/", (request, response) => {
    return response.status(200).json({
              message: " Hello World Ignite"
    })
});

module.exports = router;