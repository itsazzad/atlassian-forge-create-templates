import ForgeUI, {useProductContext, CustomFieldContextConfig, TextField} from "@forge/ui";

export const ContextConfig = () => {
  const {extensionContext: {configuration = {}}} = useProductContext();

  const onSubmit = formData => {
    return {
      configuration: {
        regexp: formData.regexp.trim(),
      }
    };
  };

  return (
    <CustomFieldContextConfig onSubmit={onSubmit}>
      <TextField name="regexp" label="Regular expression for field validation" defaultValue={configuration.regexp}/>
    </CustomFieldContextConfig>
  );
};
