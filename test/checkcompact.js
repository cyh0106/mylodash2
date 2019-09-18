const assert = require('assert')
const compact = require('../src/compact')

describe('compact', function() {
  describe('compact', function() {
    it("compact([0, 1, false, 2, '', 3]) equalTo [1, 2, 3]", function() {
      assert.deepStrictEqual(compact([0, 1, false, 2, '', 3]), [1, 2, 3])
    });
  });
});

