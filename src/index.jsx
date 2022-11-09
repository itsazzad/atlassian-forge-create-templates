import ForgeUI, { render, Fragment, Text, PortalProfilePanel } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <PortalProfilePanel>
    <App />
  </PortalProfilePanel>
);
