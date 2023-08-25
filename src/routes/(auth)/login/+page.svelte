<script lang="ts">
    import Icon from "@iconify/svelte";
    import box_img from "$lib/assets/box.png";
    import { signIn,auth,isSignedIn } from "$lib/firebase";
    import {userStore,SignedIn} from "sveltefire";

    const user = userStore(auth);
    $: if($user){
        location.href = '/';
    }
</script>

<section class="">
    <div class="absolute w-full h-[calc(100vh-4.25rem)] object-cover overflow-hidden">
        <h1 class="text-[12rem] w-full h-full text-base-content/80">C O N V E N I E N C E E F F I C I E N C Y B R A N D I N G A N A L Y T I C S  S E C U R I T Y </h1>
    </div>
    <div class="absolute w-full h-[calc(100vh-4.25rem)] overflow-hidden">
        <img src={box_img} alt="image" class="object-cover w-full h-full">
    </div>
    <div class="login-div max-w-md w-[calc(100vw-32px)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class=" bg-base-200/50 space-y-4 shadow-xl backdrop-blur-xl p-8 rounded-2xl flex flex-col">
            <h1 class="text-3xl font-bold">เข้าสู่ระบบ</h1>
            <hr class="text-primary">
            <small class="flex flex-wrap items-center">
                <Icon icon='mdi:info' class="mr-2"/>สำหรับอีเมล<code>@pccbr.ac.th</code> และ <code>@pcshsbr.ac.th</code> เท่านั้น
            </small>
            <button class="btn btn-primary" on:click|preventDefault={()=>{
                signIn(auth);
            }}><Icon icon='ri:google-fill' />เข้าสู่ระบบด้วย Google</button>
        </div>
    </div>
</section>

<style lang="scss">
    .login-div{
        z-index: 100;
        border-radius: 1rem;
        &::after {
            transition: all ease 0.5s transition-all duration-100;
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: -2px;
            right: -2px;
            background: linear-gradient(180deg,
            hsl(var(--p)),
            transparent,
            transparent,
            transparent);
            content: '';
            z-index: -50;
            border-radius: 1rem;
        }
    }
</style>