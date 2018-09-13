import { module } from 'angular';

import { Registry, SETTINGS } from '@spinnaker/core';

import { KubernetesV2FindManifestFromClusterConfigCtrl } from './findManifestFromClusterConfig.controller';
import { KUBERNETES_MANIFEST_SELECTOR } from '../../../manifest/selector/selector.component';

export const KUBERNETES_FIND_MANIFEST_FROM_CLUSTER_STAGE =
  'spinnaker.kubernetes.v2.pipeline.stage.findManifestFromCluster';

module(KUBERNETES_FIND_MANIFEST_FROM_CLUSTER_STAGE, [KUBERNETES_MANIFEST_SELECTOR])
  .config(() => {
    // Todo: replace feature flag with proper versioned provider mechanism once available.
    if (SETTINGS.feature.artifacts) {
      Registry.pipeline.registerStage({
        label: 'Find Manifest From Cluster (Manifest)',
        description: 'Retrieves a manifest from an existing cluster.',
        key: 'findManifestFromCluster',
        cloudProvider: 'kubernetes',
        templateUrl: require('./findManifestFromClusterConfig.html'),
        controller: 'KubernetesV2FindManifestFromClusterConfigCtrl',
        controllerAs: 'ctrl',
        producesArtifacts: true,
        validators: [
          { type: 'requiredField', fieldName: 'location', fieldLabel: 'Namespace' },
          { type: 'requiredField', fieldName: 'account', fieldLabel: 'Account' },
          { type: 'requiredField', fieldName: 'name', fieldLabel: 'name' },
        ],
      });
    }
  })
  .controller('KubernetesV2FindManifestFromClusterConfigCtrl', KubernetesV2FindManifestFromClusterConfigCtrl);
