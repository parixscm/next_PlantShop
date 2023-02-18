import Page from "../components/Page";
import Field from "../components/Field";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignIn() {
  return (
    <Page title="Sign In">
      <form className="flex flex-col space-y-2 items-start">
        <Field label="Email">
          <Input type="email" />
        </Field>
        <Field label="Password">
          <Input type="password" />
        </Field>
        <Button type="submit">Sign In</Button>
      </form>
    </Page>
  );
}
