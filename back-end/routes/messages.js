const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('Messages Endpoints');
});


module.exports = router;