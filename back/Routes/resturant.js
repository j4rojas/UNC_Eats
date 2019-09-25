const express = require('express');
const router = express.Router();

router.get('/all/',(req, res) => {
   console.log('all resturants');
});  

module.exports = router;