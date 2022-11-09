import ForgeUI, { DashboardGadget, DashboardGadgetEdit, render, Text, TextField, useProductContext } from "@forge/ui";

const View = () => {
  const { extensionContext: { gadgetConfiguration } } = useProductContext();

  return (
    <DashboardGadget>
      <Text
        content={`Hello ${gadgetConfiguration.name || "world"}.`}
      />
    </DashboardGadget>
  );
};

const Edit = () => {
  const onSubmit = values => {
      return values
  };

  return (
    <DashboardGadgetEdit onSubmit={onSubmit}>
      <TextField name="name" label="Say hello to:" />
    </DashboardGadgetEdit>
  );
}

export const runView = render(
  <View/>
);

export const runEdit = render(<Edit/>)