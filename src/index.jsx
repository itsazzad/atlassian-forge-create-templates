import ForgeUI, { render, Fragment, Text, OrganizationPanel } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <OrganizationPanel>
    <App />
  </OrganizationPanel>
);
