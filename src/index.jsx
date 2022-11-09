import ForgeUI, { render, Fragment, Text, PortalRequestDetail } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <PortalRequestDetail>
    <App />
  </PortalRequestDetail>
);
