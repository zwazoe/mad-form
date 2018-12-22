# mad-form
Mad form allows users to add multiple items with one click.

## Why mad-form:

Imagine creating a form for sizes for all type of products. Sizes may comes in lenght, width, height, volume, area...etc. 
You would also have to account for measurements. This may require you to add fields for each posibilities. Which maybe a nightmare. 

mad-form changes this. You can let the user defined their own fields, measurements, and values. 

Here's a code snippet. 

## The Power

With this simple code...

````
const { MAD } = require('mad-form');

const mad = new MAD( req.body, 'name', ["_", "|", "."] , ['attribute', 'sample'], ['field', 'example'] )

const data = JSON.stringify(mad.run());

````
... you'll get this output

````
[  
   {  
      "name":"Medium ",
      "attribute":[  
         {  
            "measurement":"LB",
            "field":"Weight ",
            "value":"32 "
         },
         {  
            "measurement":"Inch",
            "field":" Height ",
            "value":" 68 "
         },
         {  
            "measurement":"Inch",
            "field":" Width ",
            "value":" 48 "
         },
         {  
            "measurement":"Inch",
            "field":" Width ",
            "value":" 56"
         }
      ],
      "sample":[  
         {  
            "measurement":"Kilo",
            "field":"Volume ",
            "value":"98  "
         },
         {  
            "measurement":"Meter",
            "field":" Mass ",
            "value":" 32 "
         },
         {  
            "measurement":"Meter",
            "field":" Width ",
            "value":" 56"
         }
      ],
      "field":{  
         "variation":[  
            "5bb63f0be7179a6602f3e1e4",
            "5bb63f27e7179a6602f3e1eb",
            "5bb63f27e7179a6602f3e1eb"
         ],
         "warranty":[  
            "5bb6400ae7179a6602f3e23c",
            "5bb64024e7179a6602f3e23e",
            "5bb64017e7179a6602f3e23d"
         ],
         "timing":[  
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d"
         ],
         "content":[  
            "5b2b6019e7179a589286065d"
         ],
         "group":[  

         ]
      },
      "example":{  
         "variation":[  
            "5bb63f0be7179a6602f3e1e4",
            "5bb63f27e7179a6602f3e1eb",
            "5bb63f27e7179a6602f3e1eb"
         ],
         "warranty":[  
            "5bb6400ae7179a6602f3e23c",
            "5bb64024e7179a6602f3e23e",
            "5bb64017e7179a6602f3e23d"
         ],
         "timing":[  
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d"
         ],
         "content":[  
            "5b2b6019e7179a589286065d"
         ],
         "group":[  

         ]
      },
      "public":"true",
      "published":"true",
      "owner":"5b1e87c4f9e3a6ddec3a6f1b",
      "creator":"5b1e87c4f9e3a6ddec3a6f1b",
      "updated_at":1545501570237
   },
   {  
      "name":" Large",
      "attribute":[  
         {  
            "measurement":"LB",
            "field":"Weight ",
            "value":"32 "
         },
         {  
            "measurement":"Inch",
            "field":" Height ",
            "value":" 68 "
         },
         {  
            "measurement":"Inch",
            "field":" Width ",
            "value":" 48 "
         },
         {  
            "measurement":"Inch",
            "field":" Width ",
            "value":" 56"
         }
      ],
      "sample":[  
         {  
            "measurement":"Kilo",
            "field":"Volume ",
            "value":"98  "
         },
         {  
            "measurement":"Meter",
            "field":" Mass ",
            "value":" 32 "
         },
         {  
            "measurement":"Meter",
            "field":" Width ",
            "value":" 56"
         }
      ],
      "field":{  
         "variation":[  
            "5bb63f0be7179a6602f3e1e4",
            "5bb63f27e7179a6602f3e1eb",
            "5bb63f27e7179a6602f3e1eb"
         ],
         "warranty":[  
            "5bb6400ae7179a6602f3e23c",
            "5bb64024e7179a6602f3e23e",
            "5bb64017e7179a6602f3e23d"
         ],
         "timing":[  
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d"
         ],
         "content":[  
            "5b2b6019e7179a589286065d"
         ],
         "group":[  

         ]
      },
      "example":{  
         "variation":[  
            "5bb63f0be7179a6602f3e1e4",
            "5bb63f27e7179a6602f3e1eb",
            "5bb63f27e7179a6602f3e1eb"
         ],
         "warranty":[  
            "5bb6400ae7179a6602f3e23c",
            "5bb64024e7179a6602f3e23e",
            "5bb64017e7179a6602f3e23d"
         ],
         "timing":[  
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d",
            "5bb64059e7179a6602f3e24d"
         ],
         "content":[  
            "5b2b6019e7179a589286065d"
         ],
         "group":[  

         ]
      },
      "public":"true",
      "published":"true",
      "owner":"5b1e87c4f9e3a6ddec3a6f1b",
      "creator":"5b1e87c4f9e3a6ddec3a6f1b",
      "updated_at":1545501570237
   }
]

````

## Wow... Zwazoe... how does it work

Allow me to explain.

First, here's the form request data. Normally, you would get this from the actuall form. But for demonstration purposes, I have hard code it here. 


````

const { M, A, D, MAD } = require('../index.js');

let req = {
	body: {
        name: "Medium | Large",
        sample_measurement: "Kilo|Meter",
        sample_field: "Volume | Mass | Width ",
        sample_value: "98  | 32 | 56",
        attribute_measurement: "LB|Inch",
        attribute_field: "Weight | Height | Width ",
        attribute_value: "32 | 68 | 48 | 56",
        field_name: "variation| warranty| timing|content|group",
        field_variation: "variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d",
        example_name: "variation| warranty| timing|content|group",
        example_variation: "variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d",
        public: "true",
        published: "true",
        owner: "5b1e87c4f9e3a6ddec3a6f1b",
        creator: "5b1e87c4f9e3a6ddec3a6f1b",
        updated_at: Date.now(),

	}
};




const mad = new MAD(
    req.body, // data source
    'name', // the form name
    ["_", "|", "."] , // spliters: key, value, and options (opitions uses on demarel)
    ['attribute', 'sample'], // melel field which will get by rows.
    ['field', 'example'] //// demarel fields which will mix and match it. 
    
)

const data = JSON.stringify(mad.run());



console.log(data)


````

### Adding multiple items at once. 

#### Data Source

````
const mad = new MAD( req.body, 'name', ["_", "|", "."] , ['attribute', 'sample'], ['field', 'example'] )
````

The first argument is the data source. In the instance above, the data source is req.body. 

#### Separators

The second arguments is an array that contains separators. Pay attention tot he input below;

````
field_variation: "variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d",
````

The first separator, I am stating the "key" separator. mad-form will loop through the data source and find the keys that contain the following separtors. In this instance, field_variation is one of those keys. 

The second element of the separator array focus on separating the actual values. In this isntance, I use a pipe to separatore the values. 

````
variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb
````

The pipe indicate that the pipe " | " separate the values. This will return: 
````
field: ["variation.5bb63f0be7179a6602f3e1e4",  "variation.5bb63f27e7179a6602f3e1eb"]

````
The third separator is for the "D" or demarel on mad-form. This create a nother set of arrays for the actual content. Since we are using a period " . " for this instance, this will return:

````
field: {
	variation: ["5bb63f0be7179a6602f3e1e4","5bb63f27e7179a6602f3e1eb"]
}
````

## Forth Argument is Marel "M" or Tie It. 

````
const mad = new MAD( req.body, 'name', ["_", "|", "."] , ['attribute', 'sample'], ['field', 'example'] )
````

The third argument state what you want to Mare or tie. First here' what Mare means. 

### About Mare

Marel requries a multi select field. Users will enter multiple items in multiple fieles.

Lets say you have the folling fields.
```
attribute_field
attribute_value
attribute_measurement
```
and you call this field group attributes. 

In the field, the user may add multiple contents. i.e. Weight| Height| Wdith| Length 

This is cool because you don't have to create a field for those yourself. 

Next the user will put the value for those fields on the value field. 
```
attribute_field: Weight| Height|  Wdith|  Length 
attribute_value: 98| 32|  56|  56
```
Then the user will state the type of measurement each fields are using.
````
attribute_field: Weight| Height|  Wdith|  Length 
attribute_value: 98| 32|  56|  56
attribute_measurement: LB|  Inch|  Inch| Inch
````
The only thing the user have to take in consideration is to place each of them in order. 

This will output like this:
```
attribute: [
	{field: weight, value: 98, measurement: LB}
	{field: height, value: 32, measurement: Inch}
	{field: width, value: 56, measurement: Inch}
	{field: length, value: 56, measurement: Inch}
]
```

#### Suggar 

Becuase, the form is such a bad ass, you do not need to repeat yourself. 

````
attribute_field: Weight| Height|  Width |  Length 
attribute_value: 98| 32|  56|  56
attribute_measurement: LB|  Inch|  Inch| Inch
````

because 56 is being used for width, and length. You may just put it once. 
Same thing with Inch. 

````
attribute_field: Weight| Height|  Width |  Length 
attribute_value: 98| 32|  56
attribute_measurement: LB|  Inch
````

The form will take the last value of the field in order to complete the mixing. 

#### Marel Arguments


````
const mad = new MAD( req.body, 'name', ["_", "|", "."] , ['attribute', 'sample'], ['field', 'example'] )
````

Marel is the forth argument. Here, you will simply identify what you are going to mare. In this instance, I going to mare two items: attribute and sample. 

you only have to state the element. 

mad-form will look for fields that contains (not start with) attribute and sample. 

Like so:

````
attribute_field: Weight| Height|  Width |  Length 
attribute_value: 98| 32|  56
attribute_measurement: LB|  Inch

````

all of these contains attribute. So, it will mare the items above. 

The result would be something like this: 
 
````
 	attribute:[  
         {  
            "measurement":"LB",
            "field":"Weight ",
            "value":"32 "
         },
         {  
            "measurement":"Inch",
            "field":" Height ",
            "value":" 68 "
         },
         {  
            "measurement":"Inch",
            "field":" Width ",
            "value":" 48 "
         },
         {  
            "measurement":"Inch",
            "field":" Width ",
            "value":" 56"
         }
      ],

````
## Demarel
Demarel is great if you want to add variations to your document

## Nullifying. 

If you do not want to mare or demare. You simply want to attache, just add null or leave that argument empty. like so:

````
const mad = new MAD( req.body, 'name', ["_", "|"])
````

Be very careful. Because, if you are not mare or demare and you still read have mare and demare elements, mad-form will think you simply wnat to attache. 

For example:

````
attribute_measurement: "LB|Inch",
````

this code above will output just like that. It will  not try to work that code. It will think that is what you want. So if you are not going to mare or demare, don't add fields that are designed for mare and demare.

#### Deligence

I wouldn't be a Ninja if I did not leave a fallback plan. If you do have fields that are designed for mare and demare but for whatever reasons, you do not want to add them to your payload.

All you have to do is explicitly state null for mare and/or demare. And then identify the field that you want to attache. 

Like so:

````
//remove only mare but don't inlcude mare field in the payload: 

const mad = new MAD( req.body, 'name', ["_", "|", "."] ,null, ['field', 'example'], ['public', 'published', 'owner', 'creator'] )
````

````
//remove only demare but don't inlcude demare field in the payload: 

const mad = new MAD( req.body, 'name', ["_", "|", "."] , ['attribute', 'sample'], null, ['public', 'published', 'owner', 'creator'] )
````
````
//remove mare and demare and don't inlcude them in the payload.

const mad = new MAD( req.body, 'name', ["_", "|", "."] , null, null, ['public', 'published', 'owner', 'creator'] )
````


Remember, if you don't want to include all of the keys that are in the data source, you have to explicity state the keys you want to include. 










