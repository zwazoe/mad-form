# mad-form
Mad form allows users to add dozens of items with one click.

## Why mad-form:

- Imagine adding products. Instead of doing them one by one, the user can add multiple products all at once with variations. 


## Full Documentation

Please click on the link below to view the full documentation of this form. 

## The Power

If you follow MAD form convention, it will do the rest for you. 


#### The Route
With this simple code: 

````
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const { MAD } = require('../../../libraries/madform');

// Load People Models
const User = require('../../../models/people/User');

// Load Place Models
const Size = require('../../../models/things/Size');

router.post('/create-size', passport.authenticate('jwt', { session: false }), (req, res) => {
	const mad = new MAD(req.body, 'name', [ '_', '|', '.' ], [ 'attribute' ], [ 'field' ], {
		attache: [],
		demarelKeyed: true
	});
	const data = mad.run();

	Size.insertMany(data)
		.then(function(payload) {
			res.json(payload);
		})
		.catch(function(err) {
			res.json(err);
		});
});

module.exports = router;

````

#### The Output
I can get store all this do the database:

````
[
    {
        "variation": [
            "5bb63f0be7179a6602f3e1e4",
            "5bb63f27e7179a6602f3e1eb",
            "5bb63f27e7179a6602f3e1eb"
        ],
        "warranty": [
            "5bb6400ae7179a6602f3e23c",
            "5bb64024e7179a6602f3e23e",
            "5bb64017e7179a6602f3e23d"
        ],
        "timing": [
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d"
        ],
        "pitch": [],
        "group": [],
        "published": true,
        "public": true,
        "validated": true,
        "_id": "5c1f7b476db8b01fd4ae0fcb",
        "name": "medium",
        "attribute": [
            {
                "_id": "5c1f7b476db8b01fd4ae0fcf",
                "measurement": "lb",
                "field": "weight",
                "value": "32"
            },
            {
                "_id": "5c1f7b476db8b01fd4ae0fce",
                "measurement": "inch",
                "field": "height",
                "value": "68"
            },
            {
                "_id": "5c1f7b476db8b01fd4ae0fcd",
                "measurement": "inch",
                "field": "width",
                "value": "48"
            },
            {
                "_id": "5c1f7b476db8b01fd4ae0fcc",
                "measurement": "inch",
                "field": "width",
                "value": "56"
            }
        ],
        "owner": "5b1fefa27ecedf0c3462e7ab",
        "creator": "5b1e87c4f9e3a6ddec3a6f1b",
        "created_at": "2018-12-23T12:10:47.118Z",
        "__v": 0
    },
    {
        "variation": [
            "5bb63f0be7179a6602f3e1e4",
            "5bb63f27e7179a6602f3e1eb",
            "5bb63f27e7179a6602f3e1eb"
        ],
        "warranty": [
            "5bb6400ae7179a6602f3e23c",
            "5bb64024e7179a6602f3e23e",
            "5bb64017e7179a6602f3e23d"
        ],
        "timing": [
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d"
        ],
        "pitch": [],
        "group": [],
        "published": true,
        "public": true,
        "validated": true,
        "_id": "5c1f7b476db8b01fd4ae0fd0",
        "name": "large",
        "attribute": [
            {
                "_id": "5c1f7b476db8b01fd4ae0fd4",
                "measurement": "lb",
                "field": "weight",
                "value": "32"
            },
            {
                "_id": "5c1f7b476db8b01fd4ae0fd3",
                "measurement": "inch",
                "field": "height",
                "value": "68"
            },
            {
                "_id": "5c1f7b476db8b01fd4ae0fd2",
                "measurement": "inch",
                "field": "width",
                "value": "48"
            },
            {
                "_id": "5c1f7b476db8b01fd4ae0fd1",
                "measurement": "inch",
                "field": "width",
                "value": "56"
            }
        ],
        "owner": "5b1fefa27ecedf0c3462e7ab",
        "creator": "5b1e87c4f9e3a6ddec3a6f1b",
        "created_at": "2018-12-23T12:10:47.122Z",
        "__v": 0
    }
]
````

#### The Model
Here's the model for this application. You may use any database you want. SQL or noSQL. This is an example for MongoDB and Mongoose
````
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const SizeSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'places'
	},
	name: {
		type: String,
		required: true
	},
	// width, height, etc.
	attribute: [
		{
			value: String,
			measurement: String,
			field: String
		}
	],
	variation: [
		{
			type: Schema.Types.ObjectId,
			ref: 'variation'
		}
	],
	warranty: [
		{
			type: Schema.Types.ObjectId,
			ref: 'warranty'
		}
	],
	timing: [
		{
			type: Schema.Types.ObjectId,
			ref: 'timing'
		}
	],
	pitch: [
		{
			type: Schema.Types.ObjectId,
			ref: 'content'
		}
	],
	group: [
		{
			type: Schema.Types.ObjectId,
			ref: 'group'
		}
	],

	published: {
		type: Boolean,
		default: true
	},
	public: {
		type: Boolean,
		default: true
	},
	validated: {
		type: Boolean,
		default: true
	},

	updated_at: Date,
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = ProductSize = mongoose.model('Size', SizeSchema);


````

#### The Payload
Normally you would get the payload from a data source such as the user or an api. For demonstration purposes, I have hard coded the data here. 

````
let req = {
	body: {
		name: 'Medium | Large',
		attribute_measurement: 'LB|Inch',
		attribute_field: 'Weight | Height | Width ',
		attribute_value: '32 | 68 | 48 | 56',
		field_name: 'variation| warranty| timing|content|group',
		field_variation:
			'variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d',
		public: 'true',
		published: 'true',
		owner: '5b1e87c4f9e3a6ddec3a6f1b',
		creator: '5b1e87c4f9e3a6ddec3a6f1b',
		updated_at: Date.now()
	}
};
````


#### Testing
You may simply copy this file to fully test this library.

````
const { MAD } = require('../index.js');

let req = {
	body: {
		name: 'Medium | Large',
		sample_measurement: 'Kilo|Meter',
		sample_field: 'Volume | Mass | Width ',
		sample_value: '98  | 32 | 56',
		attribute_measurement: 'LB|Inch',
		attribute_field: 'Weight | Height | Width ',
		attribute_value: '32 | 68 | 48 | 56',
		field_name: 'variation| warranty| timing|content|group',
		field_variation:
			'variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d',
		example_name: 'variation| warranty| timing|content|group',
		example_variation:
			'variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d',
		public: 'true',
		published: 'true',
		owner: '5b1e87c4f9e3a6ddec3a6f1b',
		creator: '5b1e87c4f9e3a6ddec3a6f1b',
		updated_at: Date.now()
	}
};

const mad = new MAD(
	req.body, // data source
	'name', // the form name
	[ '_', '|', '.' ], // spliters: key, value, and options (opitions uses on demarel)
	[ 'attribute', 'sample' ], // melel field which will get by rows.
	[ 'field', 'example' ], //// demarel fields which will mix and match it.
	{ attache: [], demarelKeyed: true }
);

const data = JSON.stringify(mad.run());

console.log(data);

````














