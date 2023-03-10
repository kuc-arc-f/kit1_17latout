<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LayoutAdmin from '../../component/LayoutAdmin.svelte';

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);

</script>

<!-- MarkUp -->
<LayoutAdmin>
	<div class="container">
		<h1>Test2</h1>
	</div>
</LayoutAdmin>
