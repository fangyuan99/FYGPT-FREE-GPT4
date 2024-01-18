<script setup>
import { ref } from "vue";
import MarkdownIt from "markdown-it";

defineProps({
  msg: String,
});

const BASE_URL = process.env.BASE_URL;;
let token = ref("");
let text = ref("hi");
let res = ref("");

const ask = () => {
  res.value = "正在加载中...";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.value,
    },
    body: `{"model":"gpt-4","messages":[{"role":"user","content":"${text.value}"}]}`,
  };

  fetch(BASE_URL + "/v1/chat/completions", options)
    .then((response) => response.json())
    .then((response) => {
      let r = response.choices[0].message.content;
      console.log(r);
      const md = new MarkdownIt();
      const html = md.render(r);

      res.value = html;
    })
    .catch((err) => {
      console.error(err);
      res.value = "加载失败: " + err;
    });
};
</script>

<template>
  <h1 class="text-4xl font-bold text-center">FYGPT</h1>
  <h1 class="text-gray-400 text-center">ENJOY FREE GPT-4</h1>
  <div class="flex h-screen rounded-md main">
    <div class="w-2/3 p-4 bg-purple-100 rounded-lg m-2">
      <div v-html="res"></div>
    </div>
    <div class="w-1/3 p-4 bg-blue-100 rounded-lg m-2">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="token-input"
          >Token:</label
        >
        <input
          id="token-input"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter token"
          v-model="token"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="text-input"
          >Message:</label
        >
        <textarea
          rows="15"
          id="text-input"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter text"
          v-model="text"
        ></textarea>
      </div>
      <button
        id="send-request"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="ask"
      >
        Send
      </button>
      <p class="mt-10">
        <a
          class="text-blue-500 hover:text-blue-700"
          href="https://apifox.com/apidoc/shared-40345b46-9c9c-45cc-b494-6a6a387a978f/doc-3482396"
          >GET TOKEN</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
