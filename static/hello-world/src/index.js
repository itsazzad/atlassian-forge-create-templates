import { uiModificationsApi } from '@forge/jira-bridge';

const { onInit, onChange } = uiModificationsApi;

onInit(
  ({ api, uiModifications }) => {
    uiModifications.forEach((uiModification) => {
      console.log(`Data for UI modification ID ${uiModification.id}`, uiModification.data);
    });

    api.getFieldById('summary').setValue('Hello world');
  },
  () => {
    return ['summary'];
  }
);

onChange(
  ({ api, change, uiModifications }) => {
    uiModifications.forEach((uiModification) => {
      console.log(`Data for UI modification ID ${uiModification.id}`, uiModification.data);
    });

    const id = change.current.getId();
    const value = change.current.getValue();

    console.log(`The ${id} field value is: `, value);
  },
  () => {
    return ['summary'];
  }
);
