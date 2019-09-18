const assert = require('assert')
const drop = require('../src/drop')

describe ('drop',function()
{
    describe ('drop',function()
    {
        it("drop([1,2,3,4], 2) equalTo [3,4]", function() {
            assert.deepStrictEqual(drop([1,2,3,4], 2), [3,4])
          });
          it("drop([1,2,3,4], 5) equalTo []", function() {
            assert.deepStrictEqual(drop([1,2,3,4], 5), [])
          });
          it("drop([1,2,3,4]) notEqualTo [1,2,3,4]", function() {
            assert.notDeepStrictEqual(drop([1,2,3,4]), [1,2,3,4])
          });
        });
      });