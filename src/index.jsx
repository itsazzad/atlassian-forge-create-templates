import ForgeUI, { render, Text, Fragment, ProjectSettingsPage } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <ProjectSettingsPage>
    <App/>
  </ProjectSettingsPage>
);