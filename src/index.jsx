import ForgeUI, { render, Fragment, Text, GlobalSettings } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <GlobalSettings>
    <App />
  </GlobalSettings>
);
