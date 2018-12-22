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