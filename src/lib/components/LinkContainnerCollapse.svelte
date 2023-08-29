<script lang="ts">
    import Icon from "@iconify/svelte";
    export let isExpanded:boolean = false;
    export let url:string = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    export let originalUrl:string = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
</script>

<div class="main-container bg-base-100 p-4 w-full rounded-xl grid">
    <div><input type="checkbox" class="checkbox" /></div>
    <div>
        <p>URL : {url}</p>
        <p>Original URL : {originalUrl}</p>
    </div>
    <div class="flex gap-2 justify-end items-center">
        <button class="btn btn-sm btn-primary"><Icon icon="mdi:eye" /></button>
        <button class="btn btn-sm btn-primary"><Icon icon="mdi:edit" /></button>
        <button class="btn btn-sm btn-primary"><Icon icon="mdi:delete" /></button>
        <button class="btn btn-sm btn-ghost"><Icon icon="ps:down"/> </button>
    </div>
</div>

<style lang="scss">
    .main-container{
        grid-template-columns: 3rem 1fr 1fr;
        @media (max-width: 640px){
            grid-template-columns: 1fr;
        }
    }
</style>