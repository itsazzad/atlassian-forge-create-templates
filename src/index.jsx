import ForgeUI, { CustomField, CustomFieldEdit, render, Text, TextField, useProductContext } from "@forge/ui";

const View = () => {
  const { extensionContext: { fieldValue } } = useProductContext();

  return (
    <CustomField>
      <Text
        content={`Hello ${fieldValue || "world"}!`}
      />
    </CustomField>
  );
};

const Edit = () => {
  const onSubmit = values => {
      return values.text
  };

  return (
    <CustomFieldEdit onSubmit={onSubmit}>
      <TextField name="text" label="Say hello to:"></TextField>
    </ CustomFieldEdit>
  );
}

export const runView = render(
  <View/>
);

export const runEdit = render(<Edit/>)