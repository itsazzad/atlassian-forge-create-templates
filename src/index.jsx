import ForgeUI, { render, Form, TextField, SpaceSettings } from '@forge/ui';

const App = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextField name="hello-world" label="Hello World!" />
    </Form>
  );
};

export const run = render(
  <SpaceSettings>
    <App />
  </SpaceSettings>
);
