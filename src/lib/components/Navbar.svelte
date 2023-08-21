<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';
	import { signIn } from '$lib/firebase';
</script>

<nav class="navbar">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">PCSHSBR-Short</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a>Link</a></li>
			<li>
				<details>
					<summary> Parent </summary>
					<ul class="p-2 bg-base-100">
						<li><a>Link 1</a></li>
						<li><a>Link 2</a></li>
					</ul>
				</details>
			</li>
		</ul>
		<SignedOut let:auth>
			<button
				on:click|preventDefault={() => {
					signIn(auth);
				}}
				class="btn btn-primary">เข้าสู่ระบบ</button
			>
		</SignedOut>
		<SignedIn>Logged in!</SignedIn>
	</div>
</nav>
