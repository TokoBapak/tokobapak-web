import { Title } from "solid-start";
import { Counter } from "~/components/counter";
import { queryClient } from "~/libs/query-client";

export default function Home() {
  const loginMutation = queryClient.authentication.login.createMutation();

  async function handleLogin() {
    // I'm not actually doing anything, just to test if I can call the contracts module from this web module
    // and make sure if it compiles
    loginMutation.mutate({
      body: {
        email: "",
        password: ""
      }
    });
  }

  return (
    <main>
      <Title>Home | Tokobapak</Title>
      <h1>Tokobapak</h1>
      <button style={{ display: "block", margin: "0 auto", "margin-bottom": "2rem" }} onclick={handleLogin}>
        Login
      </button>
      <Counter />
    </main>
  );
}
