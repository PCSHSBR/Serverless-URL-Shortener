<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";
  import { SignedIn, SignedOut, userStore } from "sveltefire";
  import { auth, signIn } from "$lib/firebase";

  const user = userStore(auth);
</script>

<section class="max-w-[calc(900px-24px)] w-[calc(100vw-64px)] mx-auto mt-10">
  <h1 class="text-6xl leading-snug">
    <span class="font-extrabold text-primary">ลิงก์</span> ทั้งหมด
  </h1>
  <div
    class="url-container cursor-pointer dark:bg-dark-base-50 bg-base-200 p-2 my-4 flex"
    transition:fade|local={{ duration: 300 }}
  >
    <button class="btn btn-primary" on:click|preventDefault={() => {}}
      >ทำให้สั้น</button
    >
    <input
      type="text"
      class="w-full bg-transparent mx-4 border-none outline-none"
      placeholder="ลิงก์"
    />
  </div>
</section>
