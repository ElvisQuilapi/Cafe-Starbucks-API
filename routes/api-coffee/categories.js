var router = require('express').Router();

router.get('/', function(req, res) {
    res.json({ categories: [
        {
            'cat_name': 'Cafe & Expresso',
            'number':  1
        }
    ]
    });
});

router.get('/:id', function(req, res) {
    res.json({ id: req.params.id });
});

module.exports = router;
