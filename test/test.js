var assert = require('assert');
var validator = require('grids-mask');

describe('Validator', function () {
    describe('#isfunction', function () {
        it('should return true when the string isfunction', function () {
            if (typeof validator == 'function') {
                throw new Erorr('Validator not right');
            }
        });
    });
});