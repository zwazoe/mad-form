# MAD FORM


[If you love MAD Form, please add a star on GitHub](https://github.com/zwazoe/mad-form) https://github.com/zwazoe/mad-form


### Installing
````
npm i mad-form

````

### Full Documentation with Coding Examples

Comming soon: January 15 2019

### Build an ecommerce website

Comming soon: January 15 2019

### Is it MAD or should it be MAD?

You should  use the MAD technique and MAD Form if you are building an ecommerce, data anaytlics, data visualization, or advertising application. 

You should also consider getting MAD for any other application. 

### Languages
This library is was build using javascript.

It is great to use with javascript frameworks such as react.js, angular, vue, meeteor, ember, etc. 

The MAD technique, however, can be implemented using  any other langauges such as php, ruby, python, javascript, node, etc.

You'll just have to create your own library by following this example. Great opportunity to contribute to the open source community. Just give me some credit for bringing this method to light. 

### Database

This library output an array of objects. Thereofre, you can conform it to any database you like. 

I have test it with MongoDB, PostgreSQL, and MySQL



## Why get mad-form

Mad Form is great if you want to build a form that is robusd, less fields, and simple.

### Story

I was creating an ecommerce platform. I was architecturing the form for sizes. Then, I realized that size can be very difficult to add. 

Their are so many type of sizes. To acommodate each type, I would have to create too many conditions. 

Therefore, I created or at leat brought to light the MAD Technique. 

### The MAD Technique.

Instead of creating a field for each posibilties, you simply let the user input the field in a multiselect field. 
Then, the  user will add their value to that field. 
Then, the user may add additional contents such as measurements and vicinity.


#### Intro to Mare'l

Then I can "Mare" the field. Mare means "tie" in Haitian-Creole and Mare'l means "tie it". It is the "M" of MAD Form.

Mare think of multiselect fields as rows and the contents as columns. 

```
size_fields = weight, width, height, length
size_value = 46, 62, 65, 95
size_measurements = lb, inch, inch, meter

```

this will be views as: 

| size_field        | size_value           | size_measurements  |
| ------------- |:-------------:| -----:|
| weight     | 46 | lb |
| width     | 62     |  inch |
| height | 62      |    inch |
| length | 95     |    meter |




this will output:
````
[
	{
		attributes: [
			{ size_fields: 'weight', size_value: 46, size_measurements: 'lb'},
			{ size_fields: 'width', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'height', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'length', size_value: 95, size_measurements: 'meter'}
		]
	}
]

````

This was very helpful for me. Now, I do not have to try and think of each and every size posibilities (i.e. area, volum. proximity, etc.)

I now, simply let the user determin their own size value. 

#### Attache'l

Attache (attache'l) means to attach it in Haitian-Creole. 

Like the name said, this just let you add the ret of the fields thata sre not being mare or demare. Attache also makes the form available for use even if you are not using the MAD technique. 

Example:

```

mare:

size_fields = weight, width, height, length
size_value = 46, 62, 65, 95
size_measurements = lb, inch, inch, meter

attache 

medium = Medium
public = false
published = true

```

This will output:

[
	{
		attributes: [
			{ size_fields: 'weight', size_value: 46, size_measurements: 'lb'},
			{ size_fields: 'width', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'height', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'length', size_value: 95, size_measurements: 'meter'}
		],
		public: false,
		published: true,
		name: "Medium"
		
	}
]



#### Demarel

Now, I needed to add variations to the form. I needed to let sellers make certain item warranty available for certain sizes. And also timing and image. Some size maybe avaialble during the holidays. Or doing certain hours. 

Demarel works like a filter. First, one multiselect field will filter the variation fields. And the second field will filter the options. 


Example:

```

mare:

size_fields = weight, width, height, length
size_value = 46, 62, 65, 95
size_measurements = lb, inch, inch, meter

attache 

public = false
published = true
name = Medium

demare

field_name: warranty, timing
field_options: 

warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24dwf| timing.5bb64059e7179a6602f3e24dfsafs|  warranty.5bb64024e7179a6602f3e23e|timing.5bb64059e7179a6602f3e24dgw| warranty.5bb64017e7179a6602f3e23d

```

The above will add each option value to the field key. 

````
[
	{
		attributes: [
			{ size_fields: 'weight', size_value: 46, size_measurements: 'lb'},
			{ size_fields: 'width', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'height', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'length', size_value: 95, size_measurements: 'meter'}
		],
		public: false,
		published: true,
		name: "Medium",
		warranty: ['5bb6400ae7179a6602f3e23c', '5bb64024e7179a6602f3e23e', '5bb64017e7179a6602f3e23d' ],
		timing: ['5bb64059e7179a6602f3e24dwf', '5bb64059e7179a6602f3e24dfsafs', '5bb64059e7179a6602f3e24dgw']
	}
]
````

#### Add Multiple Items

Next, I wanted to make sure the user can add multiple item using one form. Size's may not be the best example for this since the attributes of medium maybe different than large.

However, let's imagine that user did not have to add attributes like size fields and values and measureemtns. 

Instead, the user could simply add their name. 

Nevertheless, I needed the user to be able to add multiple items all at once. 

So, I made an option where you can identify which item should be multiplied. In many cases, this could be the name. 

This way, if user add large, medium, the form will be duplicated. 

Example:

```

mare:

size_fields = weight, width, height, length
size_value = 46, 62, 65, 95
size_measurements = lb, inch, inch, meter

attache 

public = false
published = true
name = Medium, Large

demare

field_name: warranty, timing
field_options: 

warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24dwf| timing.5bb64059e7179a6602f3e24dfsafs|  warranty.5bb64024e7179a6602f3e23e|timing.5bb64059e7179a6602f3e24dgw| warranty.5bb64017e7179a6602f3e23d

```

The above will add each option value to the field key. 

````
[
	{
		attributes: [
			{ size_fields: 'weight', size_value: 46, size_measurements: 'lb'},
			{ size_fields: 'width', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'height', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'length', size_value: 95, size_measurements: 'meter'}
		],
		public: false,
		published: true,
		name: "Medium",
		warranty: ['5bb6400ae7179a6602f3e23c', '5bb64024e7179a6602f3e23e', '5bb64017e7179a6602f3e23d' ],
		timing: ['5bb64059e7179a6602f3e24dwf', '5bb64059e7179a6602f3e24dfsafs', '5bb64059e7179a6602f3e24dgw']
	},
	{
		attributes: [
			{ size_fields: 'weight', size_value: 46, size_measurements: 'lb'},
			{ size_fields: 'width', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'height', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'length', size_value: 95, size_measurements: 'meter'}
		],
		public: false,
		published: true,
		name: "Large",
		warranty: ['5bb6400ae7179a6602f3e23c', '5bb64024e7179a6602f3e23e', '5bb64017e7179a6602f3e23d' ],
		timing: ['5bb64059e7179a6602f3e24dwf', '5bb64059e7179a6602f3e24dfsafs', '5bb64059e7179a6602f3e24dgw']
	}
]
````

#### Group

I also wanted the user to be able to crate an alias and description for each size. This is very important because, the user may want to include a description or an alias of the size that they added. 

For example, if the user addded Medium and Large for shirts. 

And then they add Medium and Large for Pants. 

These can be different sizes. 

So, when the user want to add their sizes to the shirt or the pants. I want them to be able to determine which "Medium or Large" they wish to add. 

The alias is different than the displayed name. The displayed name will be shown to others. But, to the merchants, the alias will describe the actual size. 

Here's how: 



Example:

```

mare:

size_fields = weight, width, height, length
size_value = 46, 62, 65, 95
size_measurements = lb, inch, inch, meter

attache 

public = false
published = true
name = Medium, Large

demare

field_name: warranty, timing
field_options: 

warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24dwf| timing.5bb64059e7179a6602f3e24dfsafs|  warranty.5bb64024e7179a6602f3e23e|timing.5bb64059e7179a6602f3e24dgw| warranty.5bb64017e7179a6602f3e23d

group

alias: pants, shirt
description = this size goes well with lifestyle, this is another size that goes well with this lifestyle

```

The above will add each option value to the field key. 

````
[
	{
		attributes: [
			{ size_fields: 'weight', size_value: 46, size_measurements: 'lb'},
			{ size_fields: 'width', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'height', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'length', size_value: 95, size_measurements: 'meter'}
		],
		public: false,
		name: 'Medium',
		published: true,
		alias: pants,
		description: "this size goes well with lifestyle",
		warranty: ['5bb6400ae7179a6602f3e23c', '5bb64024e7179a6602f3e23e', '5bb64017e7179a6602f3e23d' ],
		timing: ['5bb64059e7179a6602f3e24dwf', '5bb64059e7179a6602f3e24dfsafs', '5bb64059e7179a6602f3e24dgw']
	},
	{
		attributes: [
			{ size_fields: 'weight', size_value: 46, size_measurements: 'lb'},
			{ size_fields: 'width', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'height', size_value: 62, size_measurements: 'inch'},
			{ size_fields: 'length', size_value: 95, size_measurements: 'meter'}
		],
		public: false,
		name: 'Large',
		published: true,
		alias: "shirt",
		description: "this is another size that goes well with this lifestyle",
		warranty: ['5bb6400ae7179a6602f3e23c', '5bb64024e7179a6602f3e23e', '5bb64017e7179a6602f3e23d' ],
		timing: ['5bb64059e7179a6602f3e24dwf', '5bb64059e7179a6602f3e24dfsafs', '5bb64059e7179a6602f3e24dgw']
	},''

]

````

#### MadValues

I do not want to be the one who thinks of all of the form value posibilities. Instead, I wanted to use the values that users added on the past in order to show them to other users as suggestions. 

That is why I created MadValues. 

MadValues able me to get get the values that the users input. 

Add the values in the database. 

And next time users are adding a size, the previous values will be fetched.

Their are multiple ways to output the values:

1. Use values as keys
2. Use fields as keys
3. No Keys

Lets run an example for the following

```
description: "this size goes well with lifestyle",
name: "medium", "large"

```

##### Values as Keys

```
 
 {
	  "this size goes well with lifestyle": {
		  categories: ["description"]
	  },
	  "medium": {
		  categories: ["name"]
	  },
	  "large": {
		  categories: ["name"]
	  }
 }

```


##### Fields as Keys

```
 
 {
	  name: {
		  options: ["medium", "large"]
	  }, 
	  description: {
		  options: ["this size goes well with lifestyle"]
	  }, 
	  
 }

```


##### No Keys

```
 ["medium", "large", "this size goes well with lifestyle"]

```
## Options

Mad forms is full of options. You can include and exclude fields to fetch data from. You may add prefix and and suffix when calling MadValues. You can add additional data. 

## Sugar

I limited the amount of sugar I added to this form. I lowercased each value. And I also removed trailing spaces. 

In addition, I make sure that mad-form does not evaluate empty and null values. For example, when you include a splitter. You may accidently add a splitter at the end. 

Like so:

Medium, Large,

Normally, that would be three values. The last value will be empty, null, or undefined. 

I made it where the last splitter does not take into effect. So, this is indeed two values. 

I also made it where the user does not have to add the entire field. 

For example, if the user add 3 size fields and 2 size value, the last size value will be applied to the last size field. Like so

````
	attributes_fields: 'Weight | Height  ',
	attributes_values: '32 | ',

````

Output 

````
	[
		{attributes_fields: 'Weight', attributes_values: '32' },
		{attributes_fields: 'Height', attributes_values: '32' }
	
	]
````


## Full Testing of mad-form 2.4.3



```
const { MAD, MadValues } = require('mad-form');

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

const payload = mad.run();

const madValues = new MadValues(
	data,
	[ 'attributes' ],
	(addOnSource = []),
	(options = {
		skip: [ 'created_at', 'field', 'owner', 'creator', '_id' ],
		keyed: {
			key: true,
			valueAsKey: false,
			categoryAsKey: true,
			valueKey: 'values',
			prefix: 'option_',
			suffix: '_option',
			addOnKeys: {
				include: true,
				prefix: 'value__',
				categoryKey: 'types',
				spaceReplacer: '__',
				addOns: {
					creator: '00934803408',
					somone: '0408373'
				}
			}
		}
	})
);

let values = madValues.run();

console.log(payload);
console.log(values);


```

payload output

````
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
		"group_description": "this item works best for the rest",
		"public": "true",
		"published": "true",
		"owner": "place.id",
		"creator": "profile.id",
		"updated_at": 1546008584116
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
		"group_description": "i am writting another description",
		"public": "true",
		"published": "true",
		"owner": "place.id",
		"creator": "profile.id",
		"updated_at": 1546008584116
	},
	{
		"name": "small",
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
		"group_description": "this is the third and last description",
		"public": "true",
		"published": "true",
		"owner": "place.id",
		"creator": "profile.id",
		"updated_at": 1546008584116
	},
	{
		"name": "xxl",
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
		"group_description": "this is the third and last description",
		"public": "true",
		"published": "true",
		"owner": "place.id",
		"creator": "profile.id",
		"updated_at": 1546008584116
	}
]

````


values output

````
{
	"option_attributes_measurements_option": {
		"values": [ "lb", "inch" ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_attributes_fields_option": {
		"values": [ "weight", "height", "width" ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_attributes_values_option": {
		"values": [ "32", "68", "48", "56" ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_name_option": {
		"values": [ "medium", "large", "small", "xxl" ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_variation_option": {
		"values": [ [ "5bb63f0be7179a6602f3e1e4", "5bb63f27e7179a6602f3e1eb", "5bb63f27e7179a6602f3e1eb" ] ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_warranty_option": {
		"values": [ [ "5bb6400ae7179a6602f3e23c", "5bb64024e7179a6602f3e23e", "5bb64017e7179a6602f3e23d" ] ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_timing_option": {
		"values": [ [ "5bb64059e7179a6602f3e24d", "5bb64059e7179a6602f3e24d", "5bb64059e7179a6602f3e24d" ] ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_content_option": {
		"values": [ [ "5b2b6019e7179a589286065d" ] ],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_group_option": { "values": [ [] ], "creator": "00934803408", "somone": "0408373" },
	"option_group_alias_option": { "values": [ "shirt", "shoes" ], "creator": "00934803408", "somone": "0408373" },
	"option_group_description_option": {
		"values": [
			"this item works best for the rest",
			"i am writting another description",
			"this is the third and last description"
		],
		"creator": "00934803408",
		"somone": "0408373"
	},
	"option_public_option": { "values": [ "true" ], "creator": "00934803408", "somone": "0408373" },
	"option_published_option": { "values": [ "true" ], "creator": "00934803408", "somone": "0408373" },
	"option_updated_at_option": { "values": [ 1546008729430 ], "creator": "00934803408", "somone": "0408373" }
}

````
### Versioning

2.4.4 is stable with no known issues as of December 28, 2018
2.4.5 fixed issue with react
2.4.7 added Forced Array options. This will make the categoryAsKey output an array instead of an object. 
2.4.8 create category key naming option

### Thank You!!!

Thank you for viewing and working with this form. Please don't forget to let me know if this works for your project or if you need any help. 

Take care.

- ZwaZoe