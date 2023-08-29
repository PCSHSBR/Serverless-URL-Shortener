<script>
    import Icon from '@iconify/svelte';
    import LinkContainnerCollapse from '$lib/components/LinkContainnerCollapse.svelte';
</script>
<section class="md:px-8 px-4 m-auto mx-auto mt-8 space-y-4">
    <div class="">
        <a href="/dashboard/adminpanel">
            <button class="btn btn-ghost">
                <Icon icon="mdi:arrow-left" /> กลับ
            </button>
        </a>
    </div>
	<h1 class="text-6xl leading-snug items">
		หน้าต่าง<span class="font-extrabold text-primary">ผู้ดูแลระบบ</span><p class="text-xl">จัดการลิงก์</p>
	</h1>
    <div class="form-control gap-2 bg-base-200 p-4 mb-4 rounded-xl">
        <div class="input-group shadow-md">
            <input type="text" placeholder="ค้นหา" class="w-full input input-bordered" />
            <button class="btn btn-square">
                <Icon icon="mdi:magnify" />
            </button>
            <button class="btn btn-square">
                <Icon icon="mdi:filter" />
            </button>
        </div>
        <div class=" input-group w-auto md:mx-0 mx-auto">
            <button class="btn bg-base-100"> 1 </button>
            <button class="btn bg-base-100">
                <Icon icon="mdi:arrow-left" />
            </button>
            <button class="btn bg-base-100"> 1/40 </button>
            <button class="btn bg-base-100">
                <Icon icon="mdi:arrow-right" />
            </button>
            <button class="btn bg-base-100"> 40 </button>
        </div>
    </div>
    <div class="bg-base-200 p-4 space-y-4 rounded-xl">
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
        <LinkContainnerCollapse/>
    </div>
</section>