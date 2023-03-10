<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LayoutBasic from '../../component/LayoutBasic.svelte';

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);

</script>

<!-- MarkUp -->
<LayoutBasic>
	<div class="container">
		<h1>Test</h1>
	</div>
</LayoutBasic>

