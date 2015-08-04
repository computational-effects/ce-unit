'use strict';

var value = require('pbp').value;
var mixin = require('ce-mixin').mixin;
var Stringify = require('ce-stringify').Stringify;

var Unit = mixin(Stringify, Object.create(null, {
  type: value('Unit'),
  args: value([]),
  ctor: value(function() {
    return Unit
  }),
}));

module.exports = {
  Unit: Unit,
};
