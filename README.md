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




