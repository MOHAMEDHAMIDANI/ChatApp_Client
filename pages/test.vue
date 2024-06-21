<template>
  <div>
    <h1>Apollo Client Test</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>{{ greeting }}</div>
  </div>
</template>

<script>
import { gql } from "@apollo/client/core";

export default {
  data() {
    return {
      greeting: "",
      loading: true,
      error: null,
    };
  },
  async mounted() {
    const client = this.$apolloProvider.defaultClient;

    try {
      const { data } = await client.query({
        query: gql`
          query {
            hello
          }
        `,
      });
      this.greeting = data.hello;
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  },
};
</script>
