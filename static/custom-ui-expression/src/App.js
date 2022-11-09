import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {view} from '@forge/bridge';
import {workflowRules} from '@forge/jira-bridge';
import TextField from '@atlaskit/textfield';

const Content = styled.div`
    margin: 24px 24px 0;
    white-space: pre-wrap;
`;

function App() {
  const [extensionData, setExtensionData] = useState(null);
  const [conditionConfig, setConditionConfig] = useState({});

  useEffect(() => {
    view.getContext().then((ctx) => {
      setExtensionData(ctx.extension);
      try {
        const config = JSON.parse(ctx.extension.conditionConfig);
        setConditionConfig(config);
      } catch {
        setConditionConfig({searchString: ''});
      }
    });
  }, []);

  useEffect(() => {
    workflowRules
      .onConfigure(() => JSON.stringify(conditionConfig))
      .catch((err) => {
        console.error(`Unable to add workflow rule configuration callback: ${err}`);
      });
  }, [conditionConfig]);

  if (!extensionData) {
    return <p>Condition is loading.</p>;
  }

  const isViewOnlyPage = extensionData.entryPoint === 'view';
  if (isViewOnlyPage) {
    return <p>Summary field must contain text: "{conditionConfig.searchString}"</p>;
  } else {
    // else if create / edit page
    const handleOnChange = (evt) => {
      setConditionConfig({searchString: evt.target.value});
    };

    return (
      <Content>
        <p>Summary field must contain text:</p>
        <p>
          <TextField
            name="searchString"
            value={conditionConfig.searchString}
            placeholder="Enter text here..."
            onChange={handleOnChange}
          />
        </p>
      </Content>
    );
  }
}

export default App;
