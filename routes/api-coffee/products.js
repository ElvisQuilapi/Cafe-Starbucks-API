var router = require('express').Router();

router.get('/', function(req, res) {
    res.json({ products: [
        {
            'name': 'Caramel Macchiato',
            'type': 'Alto',
            'price': '2.800'
        }
    ]
    });
});

router.get('/:id', function(req, res) {
    res.json({ id: req.params.id });
});

module.exports = router;
