const { M, A, D } = require('../index.js');

let req = {
	body: {
        name: "Medium | Large",
        attribute_measurement: "LB|Inch",
        attribute_field: "Weight | Height | Width ",
        attribute_value: "32 | 68 ",
	}
};

const m = new M(
    [ req.body, '|' ],
    req.body.name,
    [ 'attribute_measurement', 'attribute_field', 'attribute_value' ],
    [ 'measurement', 'field', 'value' ]
);

let data = m.run();

console.log(data)