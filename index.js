class Melel{
	constructor() {
		this.key = arguments[1];
		this.form = arguments[0][0];
		this.vSplit = arguments[0][2];
		this.kSplit = arguments[0][1];
		this.formArgs = arguments[2];
		this.attribute = [];
		this.elements = [];
		this.length = 0;
	}

	getFields(){
		// empty array to store the fields.
		let fields = [];
		// attributes are: attribute_measurement and field_name
		// key are: attribute, field
		this.formArgs.forEach(attribute => {
			// concatnate key with the key spliter '_'. = attribute_ and field_
			// then remove them from the attribute string. = measurement, name
			// lastly push it into the fields array = fields = [measurement, name]
			fields.push(attribute.replace(this.key.concat(this.kSplit), ''))	

		});
		// return the field array.
		return fields;
	}
	

	getAttributes() {
		var definedModelArguments = this.getFields();
		for (var i = 0, j = this.formArgs.length; i < j; i++) {
			// assign the Mele arguments into a new variable
			if (this.formArgs[i] !== undefined) {
				var formArg = this.formArgs[i];
			}
			let modelArgs = definedModelArguments[i];

			// see if the argument is available from the form.
			if (typeof this.form[formArg] !== 'undefined') {
				// create an empty object inside the element array
				this.elements[i] = {};
				// turn formArg value into an object key.
				// assign the key to the value from the form
				this.elements[i][modelArgs] = this.form[formArg].split(this.vSplit);
				// get the length of the created array.
				let arrayLength = this.elements[i][modelArgs].length;
				// compare this.length with arrayLength
				if (this.length < arrayLength) {
					// assign this.length to array length if array length is greater
					this.length = arrayLength;
				}
			}
		}
		return this.elements;
	}
	fillAttributes() {
		// extract attribute and length from getAttribute method
		let attribute = this.getAttributes();

		// get each object from the attribute
		attribute.forEach((object) => {
			for (const key in object) {
				if (object.hasOwnProperty(key)) {
					// get the length of the object's array
					let objectLength = object[key].length;
					// compare objectLength with the height length.
					while (this.length > objectLength) {
						// get the last value of the object
						let lastValue = object[key][object[key].length - 1];
						// continuously assign the last value to the object
						object[key].push(lastValue);
						objectLength++;
					}
				}
			}
		});

		return attribute;
	}
	run() {
		var definedModelArguments = this.getFields();
		let attributes = this.fillAttributes();
		let maxLength = attributes[0][definedModelArguments[0]].length;
		var arr = [];



		for (let i = 0; i < maxLength; i++) {
			var item = {}
			definedModelArguments.forEach((element, pos) => {
				item[element] = attributes[pos][definedModelArguments[pos]][i];
			});
			arr.push(item);
		}

		return arr;
	}
}

class Demarel {
	constructor() {
		this.form = arguments[0][0];
		this.splitter = arguments[0][1];
		this.formArgs = arguments[1];
		this.fields = {};
	}

	sanitized(item) {
		item.toLowerCase().trim();
	}
	getFields() {
		for (let i = 0; this.formArgs.length > i; i++) {
			if (this.form[this.formArgs[i]] !== undefined) {
				this.fields[this.formArgs[i].toLowerCase().trim()] = this.form[this.formArgs[i]].split(this.splitter);
			}
		}
		return this.fields;
	}
	run() {
		// get the name of the fields: i.e. description, timing, warranty, variation.
		let fields = this.getFields();

		// get the option that should apply to that fields.
		let modelSet = (pos) => {
			return fields[this.formArgs[pos]];
		};

		var model = {};
		// create an empty array for each modelSet and assign it to model array.
		for (let i = 0; modelSet(0).length > i; i++) {
			model[modelSet(0)[i].toLowerCase().trim()] = [];
		}

		// get second set
		for (let i = 0; modelSet(1).length > i; i++) {
			let field = modelSet(1)[i].toLowerCase().trim();
			if (field !== undefined) {
				var setArray = modelSet(1)[i].toLowerCase().trim().split('.');
			}
			model[setArray[0]].push(setArray[1]);
		}

		return model;
	}
}

class Attachel {
	constructor() {
		this.form = arguments[0][0];
		this.splitter = arguments[0][1];
		this.formArgs = arguments[1];
	}
	run() {
		let fields = {};
		let form = this.form;
		let formArgs = this.formArgs;
		for (let i = 0; formArgs.length > i; i++) {
			if (typeof form[formArgs[i]] !== 'undefined') {
				if(form[formArgs[i]] instanceof Date){
						fields[formArgs[i]] = form[formArgs[i]];
				} else{
					if (form[formArgs[i]].toString().includes(this.splitter)) {
						fields[formArgs[i]] = form[formArgs[i]].split(this.splitter);
					} else {
						fields[formArgs[i]] = form[formArgs[i]];
					}
				}
			}
		}
		return fields;
	}
}

class MAD {
	constructor(source, splitter = ["_", "|", "."], melel = [], demarel = []){
		this.source = arguments[0];
		this.kSplit = arguments[2][0]; // split the keys attribute_value
		this.vSplit = arguments[2][1]; // split the values 32 | 68 | 48
		this.dSplit = arguments[2][2];
		this.mele = arguments[3] // items to match similar to rows
		this.demare = arguments[4]; 
		this.title = arguments[1]
		this.source = source;
		this.data = [];

	}
	getKeys(){
		let keys = arguments[0];
		let element = arguments[1]
		let arr = []
		keys.forEach(key => {	
				if(key.includes(element)){
					
					arr.push(key)
				}				
		});

		arr.forEach(element => {
			keys.splice(keys.indexOf(element), 1 );
	
		});
		return arr
	}
	getFields(attributes, key){
		// empty array to store the fields.
		let fields = [];
		// attributes are: attribute_measurement and field_name
		// key are: attribute, field
		attributes.forEach(attribute => {
			// concatnate key with the key spliter '_'. = attribute_ and field_
			// then remove them from the attribute string. = measurement, name
			// lastly push it into the fields array = fields = [measurement, name]
			fields.push(attribute.replace(key.concat(this.kSplit), ''))	
		});
		// return the field array.
		return fields;
	}
	getMelel(attribute, key){
		// attributes are: attribute_measurement and field_name
		// key are attribute and field
		let fields = this.getFields(attribute, key)
		let mele = []
		//map the elements
		this.mele.forEach(element => {	
			const melel = new Melel([this.source, this.vSplit], element, attribute, fields)
			mele.push(melel.run());

		});
		return mele;
	}
	run(){
		const attache = Object.keys(this.source); // first get all the keys.
		const mele = {}; 
		const demare = {};
	
		// get the mele key from the arguments
		if(this.mele){
			// for each key, makes it equals to the key from the req.bod
			// remember, we use the key name to match it. like so: attibute is in attibute_measurement.
			this.mele.forEach(key => {
				// attache is the list of keys  and key is the start of the key that I am searching for concatnate with the key splitter (ksplit)
				// it will find attribute_ in the list of keys. Then, it will return it's findings. 
				mele[key] = this.getKeys(attache, key + this.kSplit)
			});
		}

		// get the mele key from the arguments
		if(this.demare){
			// for each key, makes it equals to the key from the req.bod
			// remember, we use the key name to match it. like so: attibute is in attibute_measurement.
			this.demare.forEach(key => {
				// attache is the list of keys  and key is the start of the key that I am searching for concatnate with the key splitter (ksplit)
				// it will find attribute_ in the list of keys. Then, it will return it's findings. 
				demare[key] = this.getKeys(attache, key + this.kSplit)
			});
		}

		let theFields = {};

		Object.keys(mele).forEach(key => {
			let melel = new Melel(
				[ this.source, this.kSplit, this.vSplit ],
				key,
				mele[key]
			);

			theFields[key] = melel.run()

		});

	

		// start demarel
		// Demare: Multi Fields
		Object.keys(demare).forEach(key => {
			let demarel = new Demarel([ this.source, this.vSplit ], demare[key]);
			theFields[key] = demarel.run()
		})


		// start attachel
		let attachel = new Attachel([ this.source, this.vSplit ], attache);


			Object.assign(theFields, attachel.run())

	let titles = this.source[this.title].split(this.vSplit);

	delete theFields[this.title]

	var myArray = [];
	
	
	titles.forEach(title => {
		let temp = {}
		temp[this.title] = title;
		for (const key in theFields) {
				temp[key] = theFields[key]
		}
		myArray.push(temp)
	});



	return myArray;


	}
	
}
module.exports = { M: Melel, A: Attachel, D: Demarel, MAD };
