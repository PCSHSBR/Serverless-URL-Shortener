<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";
</script>

<div class="relative hidden md:flex flex-row">
  <nav class="bg-base-200">
    <ul class="flex flex-col">
      <a href="/dashboard"
        ><button
          class="btn btn-lg {$page.url.pathname === '/dashboard'
            ? 'btn-primary'
            : 'btn-ghost'}"><Icon icon="mdi:home" /></button
        ></a
      >
      <a href="/dashboard/links"
        ><button
          class="btn btn-lg {$page.url.pathname === '/dashboard/links'
            ? 'btn-primary'
            : 'btn-ghost'}"><Icon icon="mdi:link" /></button
        ></a
      >
      <a href="/dashboard/account"
        ><button
          class="btn btn-lg {$page.url.pathname === '/dashboard/account'
            ? 'btn-primary'
            : 'btn-ghost'}"><Icon icon="mdi:account" /></button
        ></a
      >
    </ul>
  </nav>
  <div class="w-full h-[calc(100vh-68px)] overflow-auto">
    <slot />
  </div>
</div>
<div class="block md:hidden">
  <slot />
  <div class="p-10"></div>
  <div class="btm-nav bg-base-200 shadow-lg mt-10">
    <a href="/dashboard"
    ><button
      class="btn w-full btn-lg {$page.url.pathname === '/dashboard'
        ? 'btn-primary'
        : 'btn-ghost'}"><Icon icon="mdi:home" /></button
    ></a
  >
  <a href="/dashboard/links"
    ><button
      class="btn w-full btn-lg {$page.url.pathname === '/dashboard/links'
        ? 'btn-primary'
        : 'btn-ghost'}"><Icon icon="mdi:link" /></button
    ></a
  >
  <a href="/dashboard/account"
    ><button
      class="btn w-full btn-lg {$page.url.pathname === '/dashboard/account'
        ? 'btn-primary'
        : 'btn-ghost'}"><Icon icon="mdi:account" /></button
    ></a
  >
  </div>
</div>
