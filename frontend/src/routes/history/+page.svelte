<script>
	import { onMount } from 'svelte';
	import { getHistory } from '../../lib/api.js';
	import { roundToTwoDecimalPlaces } from '$lib/utils.js';
    import log from 'loglevel';

    log.setLevel('debug');

	let history = [];
	let error = null;
    let userId = null;

    onMount(() => {
        userId = sessionStorage.getItem('userId');
        log.debug("UserID on Mount", { userId });
        if (userId) {
            fetchHistory(userId);
        } else {
            error = 'No user ID found in session storage.';
            log.error(error);
        }
    });


    async function fetchHistory(id){
        log.debug("Fetching history for", { id });
        if(!id) return;
        try {
			history = await getHistory(id);
            log.debug("History Received", { history });
		} catch (e) {
			error = e.message || 'Network error fetching history.';
            log.error(error);
		}
    }

</script>

<style>
table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: #f2f2f2;
	}

	.error {
		color: red;
	}
    .empty-row td {
        height: 30px;
    }
</style>

<h1>Distance Calculator</h1>
<p>Prototype web application for calculating the distances between addresses.</p>
<h2>Historical Queries</h2>

{#if error}
	<p class="error">{error}</p>
{/if}

<table>
    <thead>
        <tr>
            <th>Source Address</th>
            <th>Destination Address</th>
            <th>Distance (km)</th>
            <th>Distance (miles)</th>
        </tr>
    </thead>
    <tbody>
        {#if history.length > 0}
            {#each history as query}
                <tr>
                    <td>{query.source_address}</td>
                    <td>{query.destination_address}</td>
                    <td>{roundToTwoDecimalPlaces(query.distance_km)}</td>
                    <td>{roundToTwoDecimalPlaces(query.distance_miles)}</td>
                </tr>
            {/each}
        {:else}
            {#each Array(5) as _, i}
                <tr class="empty-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            {/each}
        {/if}
    </tbody>
</table>