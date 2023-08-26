<script lang="ts">
  import QrCanvas from "$lib/components/QrCanvas.svelte";
  import Icon from "@iconify/svelte";
  export let link: string = "https://www.youtube.com/watch?v=zZdVwTjUtjg";
  let imageqr: HTMLImageElement | null = null;

  function DownloadQRImage() {
    let a = document.createElement("a");
    a.href = imageqr.src;
    a.download = "qr.png";
    a.click();
  }
  async function copyQRImageToClipboars() {
    try {
      const data = await fetch(imageqr.src);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Image copied.");
    } catch (err:any) {
      console.error(err.name, err.message);
    }
  }
</script>

<div class="main-container">
  <QrCanvas
    bind:imageele={imageqr}
    class="rounded-xl w-48 h-auto"
    content={link}
  />
  <div>
    <p><b>URL : </b><a class="link link-hover" href={link}>{link}</a></p>
    <p><b>URL ที่สั้นลง : </b><a class="link link-hover" href="/fix">https://pcshsbr.space/q</a></p>
    <div class="flex flex-row flex-wrap gap-2">
      <button class="btn btn-primary" on:click={DownloadQRImage}
        ><Icon icon="mdi:download" />ดาวโหลด QR Code</button
      >
      <button class="btn btn-primary" on:click={copyQRImageToClipboars}
        ><Icon icon="mdi:copy" />คัดลอก QR Code</button
      >
    </div>
  </div>
</div>

<!-- <div class="toast toast-top toast-end">
  <div class="alert alert-success flex">
    <span>คัดลอกไปยัง Clipboard เรียบร้อยแล้ว!</span>
    <button class="btn"><Icon icon="mdi:close"/></button>
  </div>
</div> -->

<style lang="scss">
  .main-container {
    grid-template-columns: 13rem 1fr;
    @apply md:grid p-4 bg-base-200 shadow-xl rounded-xl flex flex-col justify-center md:items-start items-center;
  }
</style>
