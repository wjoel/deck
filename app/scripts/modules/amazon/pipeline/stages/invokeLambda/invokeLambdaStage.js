'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.core.pipeline.stage.aws.invokeLambda', [
  require('core/pipeline/config/pipelineConfigProvider.js'),
])
  .config(function(pipelineConfigProvider) {
    pipelineConfigProvider.registerStage({
      label: 'Invoke Lambda Function',
      description: 'Invokes an AWS Lambda function',
      key: 'invokeLambda',
      cloudProvider: 'aws',
      templateUrl: require('./invokeLambdaStage.html'),
      strategy: true,
      controller: 'invokeLambdaStageCtrl'
    });
  })
  .controller('invokeLambdaStageCtrl', function($scope) {
    $scope.stage.account = $scope.stage.account || null;
    $scope.stage.region = $scope.stage.region || null;
    $scope.stage.functionContext = $scope.stage.functionContext || {};
  });
