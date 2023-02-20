import Page from "../components/Page";
import Field from "../components/Field";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { fetchJson } from "../../lib/api";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation(() =>
    fetchJson("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
  );

  const handleSubmit = async event => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    try {
      const user = await mutation.mutateAsync();
      console.log("signed in as: ", user);
      router.push("/");
    } catch (err) {
      //
    }
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
        {mutation.isError && (
          <p className="text-red-500">Invalid credentials</p>
        )}
        {mutation.isLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  );
}
