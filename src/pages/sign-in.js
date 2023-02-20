import Page from "../components/Page";
import Field from "../components/Field";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSignIn } from "hooks/user";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signInError, signInLoading } = useSignIn();

  const handleSubmit = async event => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    const isValid = await signIn(email, password);
    if (isValid) router.push("/");
  };

  return (
    <Page title="Sign In">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-2 items-start"
      >
        <Field label="Email">
          <Input
            type="email"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Field>
        {signInError && <p className="text-red-500">Invalid credentials</p>}
        {signInLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  );
}
