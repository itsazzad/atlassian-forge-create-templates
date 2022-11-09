import ForgeUI, { render, Text, Fragment, GlobalPage } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <GlobalPage>
    <App/>
  </GlobalPage>
);