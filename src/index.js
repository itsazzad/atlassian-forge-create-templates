import {
  BuiltinMetricDefinitions,
  DataProviderEventTypes,
  DataProviderResponse,
} from '@atlassian/forge-graphql'
import { calculateAverageDeployTime, calculateCustomMetricExample, findExternalSourceIdForLink, lookupDeployments } from './external-system-lookups';

const dataProvider = (request) => {
  // the dataProvider function receives the link that was added
  const { url } = request;
  console.log(`Link URL: ${url}`);

  // check to see if the link exists in the external system
  // if it does, determine the external source ID to use for it
  // if it does not, return null to indicate this isn't a link we care about
  const externalSourceId = findExternalSourceIdForLink(url);
  if (!externalSourceId) {
    return null;
  }

  // we now know that we have an externalSourceID and care about the link
  // next, we build the response shape, setting the externalSourceId and
  // any events and metrics to be enabled for the component
  const response = new DataProviderResponse('externalSourceId', {
    eventTypes: [DataProviderEventTypes.DEPLOYMENTS],
    builtInMetricDefinitions: [BuiltinMetricDefinitions.DEPLOYMENT_TIME_AVG_LAST_25],
    customMetricDefinitions: [{
      name: 'customMetric1',
    }],
  });

  // next, we can add some deployment event values
  const deployments = lookupDeployments(externalSourceId);
  response.addDeployments(deployments);

  // and add some metric data
  const deployTime = calculateAverageDeployTime(externalSourceId)
  response.addBuiltInMetricValue(BuiltinMetricDefinitions.DEPLOYMENT_TIME_AVG_LAST_25, deployTime);
  const customMetric = calculateCustomMetricExample(externalSourceId)
  response.addCustomMetricValue('customMetric1', customMetric);

  // response.build() creates the expected return type
  console.log(JSON.stringify(response.build()));
  return response.build();
};

const dataProviderCallback = (request) => {
  // the payload includes information about the result of the data provider invocation
  const { success, url, errorMessage } = request;

  // if the processing wasn't successful, the response should be logged for debugging
  if (!success) {
    console.error({
      message: "Error processing dataProvider module.",
      url,
      errorMessage
    })
  }
};

export { dataProvider, dataProviderCallback }
