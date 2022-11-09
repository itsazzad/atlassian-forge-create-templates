// This file is for logic specific to the external system that events & metrics are being ingested from.
// This is all example code and should be replaced with real lookups on your actual external system.

import graphqlGateway from "@atlassian/forge-graphql"
import { CompassBuildEventState, CompassDeploymentEventEnvironmentCategory, CompassDeploymentEventState } from "@atlassian/forge-graphql"

// looks up the link in the external system & returns an externalSourceId if it was found
export const findExternalSourceIdForLink = (url) => {
  return 'testExternalSourceId'
}

// looks up builds in the external system
export const lookupDeployments = (externalSourceId) => {
  return [
    {
      displayName: 'test1',
      description: 'test1',
      lastUpdated: '2022-03-24T21:01:00.000Z',
      updateSequenceNumber: '1',
      sequenceNumber: '1',
      state: CompassDeploymentEventState.Successful,
      url: 'https://test.example.com',
      environment: {
        category: CompassDeploymentEventEnvironmentCategory.Production,
        displayName: 'Production',
        environmentId: 'test1',
      },
      pipeline: {
        displayName: 'Pipeline 1',
        pipelineId: '123',
        url: 'https://test.example.com',
      },
    },
  ]
}

export const calculateAverageDeployTime = (externalSourceId) => {
  return 27.2
}

export const calculateCustomMetricExample = (externalSourceId) => {
  return 94.8
}