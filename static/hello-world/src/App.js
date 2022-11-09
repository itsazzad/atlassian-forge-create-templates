import React, {useEffect, useState, useCallback} from 'react';
import {view} from '@forge/bridge';
import styled from 'styled-components';
import Form, {FormHeader, FormSection, FormFooter, Field} from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, {ButtonGroup} from '@atlaskit/button';
import SectionMessage from '@atlaskit/section-message';

const Content = styled.div`
  margin: ${({ isIssueView }) => isIssueView ? '24px 24px 0' : 0};
`;

function App() {
  const [extensionData, setExtensionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    view.getContext().then(({extension}) => {
      setExtensionData(extension);
    });
  }, []);

  const formValueSubmit = useCallback(async (value) => {
    try {
      return await view.submit(value);
    } catch (e) {
      setError("Couldn't save the custom field");
    }
  }, [view]);

  const onSubmit = useCallback(async (formData) => {
    await formValueSubmit(formData.fieldValue);
  }, [formValueSubmit]);

  const handleOnBlur = useCallback(async (e, dirty) => {
    e.preventDefault();
    if (dirty) {
      await formValueSubmit(e.target.value);
    }
  }, [formValueSubmit]);

  const isIssueView = extensionData?.renderContext && extensionData.renderContext === 'issue-view';

  if (!extensionData) {
    return <>{'Loading...'}</>;
  }

  return (
    <Content isIssueView={isIssueView}>
      <Form onSubmit={onSubmit}>
        {({formProps, dirty, submitting}) => {
          if (isIssueView) {
            return (
              <form {...formProps}>
                <FormHeader title="Edit field"/>
                <FormSection>
                  {error && <SectionMessage appearance="error">{error}</SectionMessage>}
                  <Field name="fieldValue" label="Custom field value" defaultValue={extensionData.fieldValue}>
                    {({fieldProps}) => <TextField {...fieldProps} />}
                  </Field>
                </FormSection>
                <FormFooter>
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
            )
          }
          return (
            <form {...formProps} onBlur={(event) => handleOnBlur(event, dirty)}>
              {error && <SectionMessage appearance="error">{error}</SectionMessage>}
              <Field name="fieldValue" label="Custom field value" defaultValue={extensionData.fieldValue}>
                {({fieldProps}) => <TextField {...fieldProps} />}
              </Field>
            </form>
          )
        }}
      </Form>
    </Content>
  );
}

export default App;
