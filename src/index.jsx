import ForgeUI, { render, Text, ContextMenu, InlineDialog } from '@forge/ui';

const App = () => {
  return (
    <InlineDialog>
      <Text>Hello world!</Text>
    </InlineDialog>
  );
};

export const run = render(
  <ContextMenu>
    <App/>
  </ContextMenu>
);
