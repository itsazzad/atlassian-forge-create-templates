import React, {useEffect, useState, useCallback} from 'react';
import {view} from '@forge/bridge';
import PageHeader from '@atlaskit/page-header';
import Form, {FormSection, FormFooter, Field} from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, {ButtonGroup} from '@atlaskit/button';
import SectionMessage from '@atlaskit/section-message';

function App() {
  const [extensionData, setExtensionData] = useState(null);
  const [configuration, setConfiguration] = useState(() => ({regexp: '^[A-Za-z]+$'}));
  const [error, setError] = useState(null);

  useEffect(() => {
    view.getContext().then(({extension}) => {
      setExtensionData(extension);
      if (extension.configuration) {
        setConfiguration(extension.configuration);
      }
    });
  }, []);

  const onSubmit = useCallback(async (formData) => {
    try {
      return await view.submit({
        configuration: {
          regexp: formData.regexp
        }
      })
    } catch {
      setError("Couldn't save the config");
    }
  }, [view]);

  if (!extensionData) {
    return <>{'Loading...'}</>;
  }

  return (
    <Form onSubmit={onSubmit}>
      {({formProps, dirty, submitting}) => (
        <form {...formProps}>
          <PageHeader>Edit configuration</PageHeader>
          <FormSection>
            {error && <SectionMessage appearance="error">{error}</SectionMessage>}
            <Field name="regexp" label="Validation RegExp" defaultValue={configuration.regexp}>
              {({fieldProps}) => <TextField width={400} {...fieldProps} />}
            </Field>
          </FormSection>
          <FormFooter align="start">
            <ButtonGroup>
              <Button type="submit" appearance="primary" isDisabled={!dirty || submitting}>
                Submit
              </Button>
              <Button appearance="subtle" onClick={view.close}>
                Cancel
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}

export default App;
