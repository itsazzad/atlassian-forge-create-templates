import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { view } from '@forge/bridge';
import { workflowRules } from '@forge/jira-bridge';
import TextField from '@atlaskit/textfield';

const Content = styled.div`
    margin: 24px 24px 0;
    white-space: pre-wrap;
`;

function App() {
  const [extensionData, setExtensionData] = useState(null);
  const [validatorConfig, setValidatorConfig] = useState({});

  useEffect(() => {
    view.getContext().then((ctx) => {
      let config = {
        searchString: '',
      };
      try {
        config = JSON.parse(ctx.extension.validatorConfig);
      } catch {
        // noop
      }

      setExtensionData(ctx.extension);
      setValidatorConfig(config);
    });
  }, []);

  useEffect(() => {
    workflowRules
      .onConfigure(async () => JSON.stringify(validatorConfig))
      .catch((err) => {
        console.error(`Unable to add workflow rule configuration callback: ${err}`);
      });
  }, [validatorConfig]);

  if (!extensionData) {
    return <p>Validator is loading.</p>;
  }

  if (extensionData.entryPoint === 'view') {
    // display validator configuration
    return <p>Summary field must contain text: "{validatorConfig.searchString}"</p>;
  }
  // create/edit view below
  const handleOnChange = (evt) => {
    setValidatorConfig({
      searchString: evt.target.value,
    });
  };

  return (
    <Content>
      <p>Summary field must contain text:</p>
      <p>
        <TextField
          name="searchString"
          value={validatorConfig.searchString}
          placeholder="Enter text here..."
          onChange={handleOnChange}
        />
      </p>
    </Content>
  );
}

export default App;
