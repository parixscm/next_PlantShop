import Page from "../components/Page";
import Field from "../components/Field";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { fetchJson } from "../../lib/api";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });

  const handleSubmit = async event => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setStatus({ loading: true, error: false });
    try {
      const response = await fetchJson("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password }),
      });
      setStatus({ loading: false, error: false });
      console.log("response :", response); // 💡 JWT 도착
    } catch (err) {
      setStatus({ loading: false, error: true });
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
        {status.error && <p className="text-red-500">Invalid credentials</p>}
        {status.loading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  );
}
