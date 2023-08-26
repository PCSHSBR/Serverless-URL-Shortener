<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";
  import { Collection, SignedIn, SignedOut, userStore } from "sveltefire";
  import { auth, signIn } from "$lib/firebase";
  import { goto } from "$app/navigation";
  import ShortedLink from "$lib/components/ShortedLink.svelte";
  const user = userStore(auth);

  onMount(async () => {
    if (!$user) {
      goto("/login");
    }
  });
</script>

<section class="px-8 m-auto mx-auto mt-10">
  <h1 class="text-6xl leading-snug">
    <span class="font-extrabold text-primary">แดช</span>บอร์ด
  </h1>
  <div>
    <SignedIn let:auth>
      <p>
        ยินดีต้อนรับ <b>{auth.currentUser?.displayName}</b> | อีเมล:
        <b>{auth.currentUser?.email}</b>
      </p>
      <a href="/dashboard/account"><button class="btn btn-primary"
        ><Icon icon="mdi:account" />จัดการบัญชี</button></a>
    </SignedIn>
    <SignedOut let:auth>
      <p>คุณยังไม่ดเข้าสู่ระบบโปรดเข้าสู่ระบบ</p>
      <button
        class="btn btn-sm btn-primary"
        on:click={async () => {
          await goto("/login");
        }}>เข้าสู่ระบบ</button
      >
    </SignedOut>
  </div>
</section>
