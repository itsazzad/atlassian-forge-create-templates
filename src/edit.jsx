import ForgeUI, {CustomFieldEdit, TextField, useProductContext} from "@forge/ui";

export const Edit = () => {
  const {extensionContext: {fieldValue}} = useProductContext();

  const onSubmit = values => {
    return values.text;
  };

  return (
    <CustomFieldEdit onSubmit={onSubmit}>
      <TextField name="text" label="Say hello to:" defaultValue={fieldValue}/>
    </CustomFieldEdit>
  );
};
