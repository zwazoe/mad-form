# mad-form
The MAD Form npm package allow users to quickly add items from the source (form, api) to the database (mongdb, postgresql).

The MAD form techqnie is used to add multiple items and their variations to the database.

Regardless if you are using the MAD Form technique or your own ways of doing things, MAD form is a must used esepecially if you are building for ecommmerce and data analytics.

## Why mad-form:

- Imagine adding products. Instead of doing them one by one, the user can add multiple products all at once with variations. 


## Full Documentation

Please click on the link below to view the full documentation of this form: comming soon January 3, 2019

## The Power

If you follow MAD form convention, it will do the rest for you. 


#### Vrooooommmmmmm

```
const { MAD } = require('mad-form');

let req = {
	body: {
		name: 'Medium | Large|',

		attributes_measurements: 'LB|Inch|',
		attributes_fields: 'Weight | Height | Width ',
		attributes_values: '32 | 68 | 48 | 56',
		field_name: 'variation| warranty| timing|content|group|',
		field_variation:
			'variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d.',
		group_alias: 'Shirt| Shoes|',
		group_description: 'this item works best for the res|',
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
	[ 'attributes' ], // melel field which will get by rows.
	[ 'field' ], //// demarel fields which will mix and match it.
	{
		attache: [],
		overide: {
			owner: 'place.id',
			creator: 'profile.id'
		},
		includeKeys: {
			demare: false,
			group: true,
			mare: true
		},
		group: 'group',
		groupCompletion: true
	}
);


const data = JSON.stringify(mad.run());

console.log(data);


```

The Output....


```
[
	{
		"name": "medium",
		"attributes": [
			{ "attributes_measurements": "lb", "attributes_fields": "weight", "attributes_values": "32" },
			{ "attributes_measurements": "inch", "attributes_fields": "height", "attributes_values": "68" },
			{ "attributes_measurements": "inch", "attributes_fields": "width", "attributes_values": "48" },
			{ "attributes_measurements": "inch", "attributes_fields": "width", "attributes_values": "56" }
		],
		"variation": [ "5bb63f0be7179a6602f3e1e4", "5bb63f27e7179a6602f3e1eb", "5bb63f27e7179a6602f3e1eb" ],
		"warranty": [ "5bb6400ae7179a6602f3e23c", "5bb64024e7179a6602f3e23e", "5bb64017e7179a6602f3e23d" ],
		"timing": [ "5bb64059e7179a6602f3e24d", "5bb64059e7179a6602f3e24d", "5bb64059e7179a6602f3e24d" ],
		"content": [ "5b2b6019e7179a589286065d" ],
		"group": [],
		"group_alias": "shirt",
		"group_description": "this item works best for the res",
		"public": "true",
		"published": "true",
		"owner": "place.id",
		"creator": "profile.id",
		"updated_at": 1545850523596
	},
	{
		"name": "large",
		"attributes": [
			{ "attributes_measurements": "lb", "attributes_fields": "weight", "attributes_values": "32" },
			{ "attributes_measurements": "inch", "attributes_fields": "height", "attributes_values": "68" },
			{ "attributes_measurements": "inch", "attributes_fields": "width", "attributes_values": "48" },
			{ "attributes_measurements": "inch", "attributes_fields": "width", "attributes_values": "56" }
		],
		"variation": [ "5bb63f0be7179a6602f3e1e4", "5bb63f27e7179a6602f3e1eb", "5bb63f27e7179a6602f3e1eb" ],
		"warranty": [ "5bb6400ae7179a6602f3e23c", "5bb64024e7179a6602f3e23e", "5bb64017e7179a6602f3e23d" ],
		"timing": [ "5bb64059e7179a6602f3e24d", "5bb64059e7179a6602f3e24d", "5bb64059e7179a6602f3e24d" ],
		"content": [ "5b2b6019e7179a589286065d" ],
		"group": [],
		"group_alias": "shoes",
		"group_description": "this item works best for the res",
		"public": "true",
		"published": "true",
		"owner": "place.id",
		"creator": "profile.id",
		"updated_at": 1545850523596
	}
]

```












