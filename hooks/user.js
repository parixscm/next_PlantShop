import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchJson } from "lib/api";

export function useSignIn() {
  const queryClient = new useQueryClient();
  const mutation = useMutation(({ email, password }) =>
    fetchJson("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
  );

  return {
    signIn: async (email, password) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData("user", user);
        return true;
      } catch (err) {
        return false;
      }
    },
    signInError: mutation.isError,
    signInLoading: mutation.isLoading,
  };
}

export function useUser() {
  const { data } = useQuery(
    "user",
    async () => {
      try {
        return await fetchJson("/api/user");
      } catch (err) {
        return undefined;
      }
    },
    {
      staleTime: 30000,
      cacheTime: Infinity,
    }
  );

  return data;
}
