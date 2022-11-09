import ForgeUI, {useProductContext, CustomField, Text} from "@forge/ui";

export const View = () => {
  const {extensionContext: {fieldValue}} = useProductContext();

  return (
    <CustomField>
      <Text>Hello, {fieldValue || "World"}!</Text>
    </CustomField>
  );
};
