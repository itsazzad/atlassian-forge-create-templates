import ForgeUI, { render, Fragment, Text, HomepageFeed } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <HomepageFeed>
    <App />
  </HomepageFeed>
);
