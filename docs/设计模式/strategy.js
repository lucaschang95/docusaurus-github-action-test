let validator = {
    types : {},
    messages: [],
    config: {},
    validate: function(data) {
        let msg, type, checker, resultOk;

        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];
                if (!type) {
                    continue;
                }
                if (!checker) {
                    throw new Error('validation error: no handler!');
                }
                resultOk = checker.validate(data[i]);
                if (!resultOk) {
                    msg = 'xxx';
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    hasErrors: function() {
        return this.messages.length !== 0;
    },
};

validator.types.isNonEmpty = {};
validator.types.isNumber = {};
validator.types.isAlphaNum = {};

let data = {
    firstName: 'super',
    lastName: 'man',
    age: 'unknown',
    userName: '0_o',
};

validator.config = {
    firstName: 'isNonEmpty',
    age: 'isNumber',
    userName: 'isAlphaNum',
};

validator.validate(data);
if (validator.hasErrors()) {
    console.log(validator.messages.join('\n'));
}