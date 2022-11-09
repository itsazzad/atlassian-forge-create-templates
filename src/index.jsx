import ForgeUI, { render, Fragment, Text, SpacePage } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <SpacePage>
    <App />
  </SpacePage>
);
