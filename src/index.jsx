import ForgeUI, { render, Text, InlineDialog, ContentBylineItem } from '@forge/ui';

const App = () => {
  return (
    <InlineDialog>
      <Text>Hello world!</Text>
    </InlineDialog>
  );
};

export const run = render(
  <ContentBylineItem>
    <App />
  </ContentBylineItem>
);
