import api, { route } from '@forge/api';

const UI_MODIFICATIONS_NAME = 'hello-world-ui-modification';

const PROJECT_ID = 10000;
const ISSUE_TYPE_ID = 10001;

const createUiModification = async (projectId, issueTypeId) => {
  const result = await api.asApp().requestJira(route`/rest/api/3/uiModifications`, {
    method: 'POST',
    body: JSON.stringify({
      name: UI_MODIFICATIONS_NAME,
      contexts: [
        {
          projectId,
          issueTypeId,
          viewType: 'GIC'
        }
      ]
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  console.log(`Added UI modification to the context of project id ${projectId} and issue type id ${issueTypeId}`);

  return result.status;
};

export async function run(event, context) {
  console.log('Creating the UI modification context after installation...');

  try {
    await createUiModification(PROJECT_ID, ISSUE_TYPE_ID);
  } catch (e) {
    console.error(
      'Project or issue type id is invalid. Be aware that this inital template only provides an example hardcoded id for a single UI modification context.'
    );
  }
}
