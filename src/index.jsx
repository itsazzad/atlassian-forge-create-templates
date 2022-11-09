import ForgeUI, { render, Fragment, Text, PortalRequestDetailPanel } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <PortalRequestDetailPanel>
    <App />
  </PortalRequestDetailPanel>
);
