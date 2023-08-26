<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";
  import { SignedIn, SignedOut, userStore } from "sveltefire";
  import { auth, signIn,isSignedIn } from "$lib/firebase";
  import { onMount } from "svelte";

  const user = userStore(auth);
</script>

<section class="max-w-[calc(900px-24px)] w-[calc(100vw-64px)] mx-auto mt-10">
	<div>
    <SignedIn let:auth>
      <p>ยินดีต้อนรับ <b>{auth.currentUser?.displayName}</b> | อีเมล์: <b>{auth.currentUser?.email}</b></p>
      <button class="btn btn-sm btn-primary" on:click={async()=>{
        await auth.signOut()
        if ($user == null) {
          location.href = "/"
        }
      }}>ออกจากระบบ</button>
    </SignedIn>
    <SignedOut let:auth>
      <p>คุณยังไม่ดเข้าสู่ระบบโปรดเข้าสู่ระบบ</p>
      <button class="btn btn-sm btn-primary" on:click={async()=>{
        location.href = "/login"
      }}>เข้าสู่ระบบ</button>
    </SignedOut>
	</div>
  <SignedIn>
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
  </SignedIn>
</section>
