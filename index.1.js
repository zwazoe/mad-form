class Papa {
	constructor() {}
	sanitized(item) {
		return item.toLowerCase().trim();
	}

	removeTrailingSplitter(element, splitter) {
		// sanitized
		let prep = this.sanitized(element);
		// get last character
		let trail = prep.charAt(prep.length - splitter.length);
		// if splitter is equal to the last character, remove the last character
		if (splitter == trail) {
			prep = prep.slice(0, prep.length - splitter.length);
		}
		return prep;
	}
	getFieldNeeded(formArgs, formKey, kSplit, toRemove = true) {
		// formargs is all of the arguments in the sourcr;
		// form key, is the key item that you will be looking to see if the form has like group_name, group_description.
		// we will search to see if form has group_ in there.
		// empty array to store the fields.
		let fields = [];
		// attributes are: attribute_measurement and field_name
		// key are: attribute, field

		formArgs.forEach((attribute) => {
			// concatnate key with the key spliter '_'. = attribute_ and field_
			let keyAndSplit = formKey.concat(kSplit);
			// if it is available decie to see if we should only return the key or removed the formkey and split.

			if (attribute.includes(keyAndSplit, 0)) {
				if (toRemove) {
					let newKey = attribute.replace(keyAndSplit, '');
					fields.push(newKey);
				} else {
					fields.push(attribute);
				}
			}
		});
		// return the field array.
		return fields;
	}
	getValuesItem(source, key, vSplit) {
		let prep = source[key];
		prep = this.removeTrailingSplitter(prep, vSplit);

		let itemArray = prep.split(vSplit);
		return itemArray;
	}
	getValues(source, keys, vSplit) {
		let values = {};
		keys.forEach((key) => {
			values[key] = this.getValuesItem(source, key, vSplit);
		});
		return values;
	}
}

class MadGroup extends Papa {
	constructor(source, splitter = [], key) {
		super();
		// the data source
		this.source = source;
		// how to split the value (Medium | Large |) the pipe will be the splitter
		this.vSplit = splitter[1];
		this.kSplit = splitter[0];
		this.key = key;
	}

	run() {
		let formArgs = Object.keys(this.source);

		// extract group from the source.
		let fields = this.getFieldNeeded(formArgs, this.key, this.kSplit, false);
		let values = this.getValues(this.source, fields, this.vSplit);
		return values;
	}
}
class Melel {
	constructor() {
		this.key = arguments[1];
		this.form = arguments[0][0];
		// spliting the value i.e. "|"
		this.vSplit = arguments[0][2];
		// spliting the keys i.e. "-"
		this.kSplit = arguments[0][1];
		this.formArgs = arguments[2];
		this.attribute = [];
		this.elements = [];
		this.length = 0;
		this.includeKeys = arguments[3];
	}
	sanitized(item) {
		return item.toLowerCase().trim();
	}
	removeTrailingSplitter(element, splitter) {
		// sanitized
		let prep = this.sanitized(element);
		// get last character
		let trail = prep.charAt(prep.length - splitter.length);
		// if splitter is equal to the last character, remove the last character
		if (splitter == trail) {
			prep = prep.slice(0, prep.length - splitter.length);
		}
		return prep;
	}

	getFields() {
		// empty array to store the fields.
		let fields = [];
		// attributes are: attribute_measurement and field_name
		// key are: attribute, field

		this.formArgs.forEach((attribute) => {
			// concatnate key with the key spliter '_'. = attribute_ and field_
			// then remove them from the attribute string. = measurement, name
			// lastly push it into the fields array = fields = [measurement, name]
			let keyAndSplit = this.key.concat(this.kSplit);
			let newKey;
			if (this.includeKeys == true) {
				newKey = attribute;
			} else {
				newKey = attribute.replace(keyAndSplit, '');
			}
			fields.push(newKey);
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
				let prep = this.form[formArg];
				// sanitized
				prep = this.removeTrailingSplitter(prep, this.vSplit);

				prep = prep.split(this.vSplit);
				//sanitized the value
				let ready = [];
				prep.forEach((element) => {
					ready.push(this.sanitized(element.toString()));
				});
				// assign the value
				this.elements[i][modelArgs] = ready;

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
		var arr = [];

		if (attributes.length > 0) {
			let maxLength = attributes[0][definedModelArguments[0]].length;

			for (let i = 0; i < maxLength; i++) {
				var item = {};
				definedModelArguments.forEach((element, pos) => {
					let value = attributes[pos][definedModelArguments[pos]][i];

					if (value !== '' && value !== null && value !== undefined && value.length > 0) {
						item[element] = value;
					}
				});
				arr.push(item);
			}
		}

		return arr;
	}
}

class Demarel {
	constructor(

	) {
		this.source = arguments[0][0];
		this.vSplit = arguments[0][1];
		this.kSplit = arguments[0][2];
		this.oSplit = arguments[0][3];

		this.formArgs = arguments[1];
		this.fields = {};
	}
	sanitized(item) {
		return item.toLowerCase().trim();
	}
	removeTrailingSplitter(element, splitter) {
		// sanitized
		let prep = this.sanitized(element);
		// get last character
		let trail = prep.charAt(prep.length - splitter.length);
		// if splitter is equal to the last character, remove the last character
		if (splitter == trail) {
			prep = prep.slice(0, prep.length - splitter.length);
		}
		return prep;
	}

	getFields() {
		for (let i = 0; this.formArgs.length > i; i++) {
			let prep = this.source[this.formArgs[i]];
			prep = this.removeTrailingSplitter(prep, this.vSplit);
			if (prep !== undefined) {
				this.fields[this.formArgs[i].toLowerCase().trim()] = prep.split(this.vSplit);
			}
		}
		return this.fields;
	}

	run() {
		// get the name of the fields: i.e. description, timing, warranty, variation.
		let fields = this.getFields();
		console.log("here is all of the source from inside mad ", this.source)
		console.log("here is all of the fields from inside mad ", fields)
		console.log("here is all of the form args from inside mad ", this.formArgs)

		// get the option that should apply to that fields.
		let modelSet = (pos) => {
			return fields[this.formArgs[pos]];
		};

		var model = {};
		if (Object.keys(fields).length > 0) {
			// create an empty array for each modelSet and assign it to model array.
			for (let i = 0; modelSet(0).length > i; i++) {
				model[modelSet(0)[i].toLowerCase().trim()] = [];
			}

			// get second set

			for (let i = 0; modelSet(1) ? modelSet(1).length : [].length > i; i++) {
				let field = modelSet(1)[i].toLowerCase().trim();
				if (field !== undefined) {
					let prep = modelSet(1)[i];
					prep = this.sanitized(prep);
					prep = this.removeTrailingSplitter(prep, this.oSplit);
					var setArray = prep.split(this.oSplit);
				}
				// if the model key existis, push it. if it doesnt exist, create it and then push it.
				if(model[setArray[0]]){
					model[setArray[0]].push(setArray[1]);
				}else  {
					model[setArray[0]] = [];
				model[setArray[0]].push(setArray[1]);

				}
			}
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
	sanitized(item) {
		item.toLowerCase().trim();
	}
	run() {
		let fields = {};
		let form = this.form;
		let formArgs = this.formArgs;
		for (let i = 0; formArgs.length > i; i++) {
			if (typeof form[formArgs[i]] !== 'undefined') {
				if (form[formArgs[i]] instanceof Date) {
					fields[formArgs[i]] = form[formArgs[i]];
				} else {
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
	constructor(
		source,
		name,
		splitter = [ '_', '|', '.' ],
		melel = [],
		demarel = [],
		options = {
			attache: [],
			overide: {},
			includeKeys: {
				demare: true,
				mare: true,
				group: true
			},
			group: '',
			finishGroup: 'true',
			includeGroupKey: 'true'
		}
	) {
		this.splitter = splitter;
		this.kSplit = splitter[0]; // split the keys attribute_value
		this.vSplit = splitter[1]; // split the values 32 | 68 | 48
		this.oSplit = splitter[2];
		this.mele = melel; // items to match similar to rows
		this.demare = demarel;
		this.title = name;
		this.source = source;
		this.data = [];
		this.defaultAttache = options.attache;
		this.overide = options.overide;
		this.group = options.group;
		this.groupCompletion = options.groupCompletion;
		this.includeDemareKey = options.includeKeys.demare;
		this.includeGroupKey = options.includeKeys.group;
		this.includeMareKey = options.includeKeys.mare;
	}
	sanitized(item) {
		 item = item ? item.toLowerCase().trim() : item
		return item
	}
	properlized(item) {
		let output = ''
		// split the words by spaces
		let arrItem = item.split(" ");
		//map it 
		arrItem.map((string, index) => {
			// get the first character. capitlized it. Add it to the rest of the string but take away the first character so we can make space for the capitalized character.
			output = output + string.charAt(0).toUpperCase() + string.slice(1) 
			// if it is the last array, do not add a space.
			if(arrItem.length  - 1 > index){
				output =+ ' '
			}
		})
	}
	// todo: get this from papa
	removeTrailingSplitter(element, splitter) {
		// sanitized
		let prep = this.sanitized(element);
		// get last character
		let trail = prep.charAt(prep.length - splitter.length);
		// if splitter is equal to the last character, remove the last character
		if (splitter == trail) {
			prep = prep.slice(0, prep.length - splitter.length);
		}
		return prep;
	}
	getKeys() {
		let source = arguments[0];
		let element = arguments[1];
		let keys = [];

		source.forEach((key) => {
			if (key.includes(element)) {
				keys.push(key);
			}
		});

		keys.forEach((element) => {
			source.splice(source.indexOf(element), 1);
		});
		return keys;
	}
	getFields(attributes, key) {
		// empty array to store the fields.
		let fields = [];
		// attributes are: attribute_measurement and field_name
		// key are: attribute, field
		attributes.forEach((attribute) => {
			// concatnate key with the key spliter '_'. = attribute_ and field_
			// then remove them from the attribute string. = measurement, name
			// lastly push it into the fields array = fields = [measurement, name]
			fields.push(attribute.replace(key.concat(this.kSplit), ''));
		});
		// return the field array.
		return fields;
	}
	getMelel(attribute, key) {
		// attributes are: attribute_measurement and field_name
		// key are attribute and field
		let fields = this.getFields(attribute, key);
		let mele = [];
		//map the elements
		this.mele.forEach((element) => {
			const melel = new Melel([ this.source, this.vSplit ], element, attribute, fields);
			mele.push(melel.run());
		});
		return mele;
	}
	addGroup() {}
	run() {
		let rawKeys = Object.keys(this.source); // first get all the keys.
		// sanitized the keys

		let attache = [];
		rawKeys.forEach((key) => {
			attache.push(this.sanitized(key));
		});

		const mele = {};
		const demare = {};

		// get the mele key from the arguments
		if (this.mele) {
			// for each key, makes it equals to the key from the req.bod
			// remember, we use the key name to match it. like so: attibute is in attibute_measurement.
			this.mele.forEach((key) => {
				// attache is the list of keys  and key is the start of the key that I am searching for concatnate with the key splitter (ksplit)
				// it will find attribute_ in the list of keys. Then, it will return it's findings.
				mele[key] = this.getKeys(attache, key + this.kSplit);
			});
		}

		// get the mele key from the arguments
		if (this.demare) {
			// for each key, makes it equals to the key from the req.bod
			// remember, we use the key name to match it. like so: attibute is in attibute_measurement.
			this.demare.forEach((key) => {
				// attache is the list of keys  and key is the start of the key that I am searching for concatnate with the key splitter (ksplit)
				// it will find attribute_ in the list of keys. Then, it will return it's findings.
				demare[key] = this.getKeys(attache, key + this.kSplit);
			});
		}

		let theFields = {};

		Object.keys(mele).forEach((key) => {
			let melel = new Melel([ this.source, this.kSplit, this.vSplit ], key, mele[key], this.includeMareKey);

			theFields[key] = melel.run();
		});

		// start demarel
		// Demare: Multi Fields
		Object.keys(demare).forEach((key) => {
			let demarel = new Demarel(
				[ this.source, this.vSplit, this.kSplit, this.oSplit ],
				demare[key],
				this.demarelHolder
			);
			if (this.includeDemareKey) {
				theFields[key] = demarel.run();
			} else {
				Object.assign(theFields, demarel.run());
			}
		});

		// start attachel
		// only attache those what is prescribed by the user

		if (this.defaultAttache.length > 0) {
			attache = this.defaultAttache;
		}

		let attachel = new Attachel([ this.source, this.vSplit ], attache);
		let readyAttachel = attachel.run();

		if (this.overide) {
			let overideKeys = Object.keys(this.overide);
			if (overideKeys.length > 0) {
				overideKeys.forEach((key) => {
					delete readyAttachel[this.overide[key]];
				});
				Object.assign(readyAttachel, this.overide);
			}
		}

		Object.assign(theFields, readyAttachel);

		let prep = this.source[this.title];
		prep = this.removeTrailingSplitter(prep, this.vSplit);

		let titles = prep.split(this.vSplit);

		delete theFields[this.title];

		var myArray = [];

		titles.forEach((title) => {
			if (this.sanitized(title) !== '') {
				let temp = {};
				temp[this.title] = this.sanitized(title);
				for (const key in theFields) {
					temp[key] = theFields[key];
				}
				myArray.push(temp);

				const madGroup = new MadGroup(
					this.source, // data source
					this.splitter, // spliters: key, value, and options (opitions uses on demarel)
					this.group
				);

				let group = madGroup.run();
				let groupKeys = Object.keys(group);

				// loop through the array and gget each and every items.
				//
				let i = 0;
				myArray.forEach((item) => {
					groupKeys.forEach((key) => {
						let value = group[key];
						let currentValue = value[i];
						let lastValue = value[value.length - 1];
						let newKey = key.replace(this.group.concat(this.kSplit), '');
						if (i > group[key].length - 1) {
							if (this.groupCompletion) {
								if (this.includeGroupKey) {
									item[key] = this.sanitized(lastValue);
								} else {
									delete item[key];
									item[newKey] = this.sanitized(lastValue);
								}
							} else {
								delete item[key];
							}
						} else {
							if (this.includeGroupKey) {
								item[key] = this.sanitized(currentValue);
							} else {
								delete item[key];
								item[newKey] = this.sanitized(currentValue);
							}
						}
					});

					i++;
				});
			}
		});

		return myArray;
	}
}

// getAll values
class MadValues extends Papa {
	constructor(
		mainSource = [],
		embededSource = [],
		addOnSource = [],
		options = {
			skip: [],
			keyed: {
				key: true,
				valueAsKey: false,
				categoryAsKey: true,
				categoryKey: 'name',
				valueKey: 'value',
				prefix: '',
				suffix: '',
				forceArray: true,
				addOnKeys: {
					include: true,
					prefix: '',
					categoryKey: 'types',
					spaceReplacer: ' ',
					addOns: {
						name: 'something'
					}
				}
			}
		}
	) {
		super();
		this.mainSource = mainSource;
		this.embededSource = embededSource;
		this.addOnSource = addOnSource;

		this.skip = options.skip;

		this.keyed = options.keyed.key;
		this.valueAsKey = options.keyed.valueAsKey;
		this.categoryAsKey = options.keyed.categoryAsKey;

		this.prefix = options.keyed.prefix;
		this.suffix = options.keyed.suffix;
		this.addOnKeys = options.keyed.addOnKeys;
		this.categoryKey = options.keyed.categoryKey;
		this.valueKey = options.keyed.valueKey;
		this.forceArray = options.keyed.forceArray;
	}

	run() {
		// Get Source
		let sources = [];
		this.mainSource.forEach((main) => {
			this.embededSource.forEach((embeded) => {
				sources = sources.concat(main[embeded]);
				delete main[embeded];
			});
		});

		sources = sources.concat(this.mainSource);
		if (this.addOnSource.length > 0) {
			this.addOnSource.forEach((addOn) => {
				sources = sources.concat(addOn);
			});
		}

		// Get Keys
		let combinedKeys = [];

		if (Array.isArray(sources)) {
			sources.forEach((sourceItem) => {
				try {
					let newKeys = Object.keys(sourceItem);

					combinedKeys = combinedKeys.concat(newKeys);
				} catch (err) {}
			});
		}
		// get values
		let keyedValue = [];
		let objValue = {};
		let i = 1;

		sources.forEach((source) => {
			combinedKeys.forEach((key) => {
				if (source) {
					if (!this.skip.includes(key)) {
						let item = source[key];
						if (item) {
							if (this.keyed == true && this.valueAsKey == false && this.categoryAsKey == false) {
								if (!keyedValue.includes(item)) {
									keyedValue.push(source[key]);
								}
							} else if (
								this.keyed == true &&
								this.categoryAsKey == true &&
								this.addOnKeys.include == false
							) {
								let newKey = this.prefix + key + this.suffix;
								let objValueKeys = Object.keys(objValue);
								if (objValueKeys.includes(newKey)) {
									if (!objValue[newKey].includes(source[key])) {
										objValue[newKey].push(source[key]);
									}
								} else {
									objValue[newKey] = [];
									objValue[newKey].push(source[key]);
								}
							} else if (
								this.keyed == true &&
								this.categoryAsKey == true &&
								this.addOnKeys.include == true
							) {
								let newKey = this.prefix + key + this.suffix;
								let objValueKeys = Object.keys(objValue);
								if (objValueKeys.includes(newKey)) {
									if (!objValue[newKey][this.valueKey].includes(source[key])) {
										objValue[newKey][this.valueKey].push(source[key]);

										objValue[newKey] = Object.assign(objValue[newKey], this.addOnKeys.addOns);
									}
								} else {
									let temp = {};
									temp[this.valueKey] = [];
									temp[this.valueKey].push(source[key]);
									objValue[newKey] = Object.assign(temp, this.addOnKeys.addOns);
								}
							} else if (this.keyed == true && this.valueAsKey == true) {
								let sourceWithKey = source[key].toString();
								if (sourceWithKey) {
									let sourceArray = sourceWithKey.split(' ');
									let newSource = sourceArray.join(this.addOnKeys.spaceReplacer);
									newSource = this.addOnKeys.prefix + newSource;

									let objValueKeys = Object.keys(objValue);
									if (objValueKeys.includes(newSource)) {
										let addOnCategories = this.addOnKeys.categoryKey;
										let objValueSourceKeys = objValue[newSource][addOnCategories];

										if (!objValueSourceKeys.includes(key)) {
											objValue[newSource][addOnCategories].push(key);
										}
									} else {
										let TempObjValue = {};
										let addOnCategories = this.addOnKeys.categoryKey;

										TempObjValue[newSource] = { [addOnCategories]: [ key ] };

										objValue[newSource] = Object.assign(
											TempObjValue[newSource],
											this.addOnKeys.addOns
										);
									}
								}
							}
						}
					}
				}
			});
		});

		if (!this.keyed) {
			return keyedValue;
		} else if (this.valueAsKey == false && this.categoryAsKey == false) {
			return keyedValue;
		} else if (this.valueAsKey == false && this.categoryAsKey == true && this.addOnKeys.include == true) {
			if (this.forceArray == true) {
				let arrayFromObj = [];
				Object.keys(objValue).forEach((element) => {
					let temp = objValue[element];
					temp[this.categoryKey] = element;
					arrayFromObj.push(temp);
				});

				return arrayFromObj;
			} else {
				return this.categoryKey;
			}
		} else if (this.valueAsKey) {
			let valueObj = [];
			let i = 0;
			Object.keys(objValue).forEach((element) => {
				let temp = {};
				temp = Object.assign(objValue[element], temp);
				temp[this.valueKey] = element;
				valueObj.push(temp);
			});

			return valueObj;
		}
	}
}
module.exports = { MG: MadGroup, M: Melel, A: Attachel, D: Demarel, MAD, MadValues };
