'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.core.pipeline.stage.invokeLambda', [
  require('./invokeLambdaStage.js'),
  require('../../../../core/pipeline/config/stages/stage.module.js'),
  require('../../../../core/stage.core.module.js'),
]);
