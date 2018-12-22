class Melel{
	constructor() {
		this.key = arguments[1];
		this.form = arguments[0][0];
		this.splitter = arguments[0][1];
		this.formArgs = arguments[2];
		this.modelArgs = arguments[3];
		this.attribute = [];
		this.elements = [];
		this.length = 0;
	}
	// if user does not pass a second array, make the first argument the model  array
	definedModelArguments() {
		var formArgs = this.formArgs;
		var modelArgs = this.modelArgs;
		let conditionalModelArgs = (function() {
			if (modelArgs !== undefined) {
				if (modelArgs.length < formArgs.length) {
					while (modelArgs.length < formArgs.length) {
						modelArgs[modelArgs.length] = formArgs[modelArgs.length];
					}
					return modelArgs;
				} else {
					return modelArgs;
				}
			} else {
				return formArgs;
			}
		})();
		return conditionalModelArgs;
	}

	getAttributes() {
		var definedModelArguments = this.definedModelArguments();
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
				this.elements[i][modelArgs] = this.form[formArg].split(this.splitter);
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
		var definedModelArguments = this.definedModelArguments();
		let attributes = this.fillAttributes();
		let maxLength = attributes[0][definedModelArguments[0]].length;
		var arr = [];

		for (let i = 0; i < maxLength; i++) {
			var item = {};
			definedModelArguments.forEach((element, pos) => {
				item[element] = attributes[pos][definedModelArguments[pos]][i];
			});
			arr.push(item);
		}
		let final = {};
		// create multiple items using the spliter
		let items = this.key.split('|')
		items.forEach(item => {
			final[item.toLowerCase().trim()] = arr;
		});
		return final;
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
	separateFields() {
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
	singles() {
		let fields = {};
		let form = this.form;
		let formArgs = this.formArgs;
		for (let i = 0; formArgs.length > i; i++) {
			if (typeof form[formArgs[i]] !== 'undefined') {
				if (form[formArgs[i]].includes(this.splitter)) {
					fields[formArgs[i]] = form[formArgs[i]].split(this.splitter);
				} else {
					fields[formArgs[i]] = form[formArgs[i]];
				}
			}
		}
		return fields;
	}
}

module.exports = { M: Melel, A: Attachel, D: Demarel };
