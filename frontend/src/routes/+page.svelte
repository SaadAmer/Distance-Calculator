<script>
	import { writable, derived } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { getDistance } from '../lib/api.js';
	import { roundToTwoDecimalPlaces } from '$lib/utils.js';
	import { onMount } from 'svelte';
	import log from 'loglevel';

    log.setLevel('debug');

	let source = '';
	let destination = '';
	let distanceKm = writable(null);
	let distanceMiles = writable(null);
	let errorMessage = writable('');
	let loading = writable(false);
	let selectedUnit = writable('both');

    // Creating a writable store for the raw session storage for user id.
    const storedUserId = writable(null);

    onMount(() => {
        const storedId = sessionStorage.getItem('userId');
        if (storedId) {
            storedUserId.set(storedId);
			log.debug('User ID loaded from session storage:', storedId);
        } else {
            const newId = generateUniqueId();
            sessionStorage.setItem('userId', newId);
            storedUserId.set(newId);
			log.debug('New user ID generated and stored:', newId);
        }
    });


	const userId = derived(storedUserId, ($storedUserId) => $storedUserId);

    $: if($storedUserId){
        sessionStorage.setItem('userId', $storedUserId)
    }

	const fetchDistance = async () => {
		log.debug('Calculate Distance used:', { source, destination, userId: $userId });
		if (!source.trim() || !destination.trim() || !$userId) {
			log.warn('Missing input fields.');
			errorMessage.set('Please enter user ID, source, and destination.');
			loading.set(false);
			return;
		}

		errorMessage.set('');
		distanceKm.set(null);
		distanceMiles.set(null);
		loading.set(true);
		log.debug('Getting the  distance', { userId: $userId, source, destination });

		try {
			const data = await getDistance($userId, source, destination);
			distanceKm.set(roundToTwoDecimalPlaces(data.distance_km));
			distanceMiles.set(roundToTwoDecimalPlaces(data.distance_miles));
			log.debug('Distance:', { distanceKm: $distanceKm, distanceMiles: $distanceMiles });
		} catch (error) {
			log.error('Error fetching distance:', error, { userId: $userId, source, destination });
			errorMessage.set(error.message || 'Network error. Please try again.');
		} finally {
			loading.set(false);
		}
	};

	const goToHistory = () => {
		goto('/history');
	};

  function generateUniqueId() {
        return 'user' + Date.now().toString(36) + Math.random().toString(36).substring(2,9).replace(/[^a-z0-9]/g, "");
  }
</script>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.history-button {
		background-color: black;
		color: white;
		padding: 10px 15px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.input-row {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		margin-bottom: 15px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.input-group label {
		font-weight: bold;
		font-size: 0.9em;
		margin-bottom: 5px;
	}

	input {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		box-sizing: border-box;
	}

	.radio-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 150px;
	}

	.radio-group > :global(p) {
		font-weight: bold;
		margin-bottom: 5px;
		font-size: 0.9em;
	}

	.radio-group label {
		margin-bottom: 5px;
		display: flex;
		align-items: center;
	}
	.radio-group label input {
		margin-right: 5px;
	}

	.calculate-button {
		background-color: red;
		color: white;
		padding: 10px 15px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-bottom: 1rem;
	}
	.calculate-button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}

	.results-container {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
		width: 100%;
		margin-top: 10px;
	}

	.distance-display {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.distance-display > p:first-child {
		font-weight: bold;
		margin-bottom: 5px;
		font-size: 0.9em;
	}

	.error-popup {
		position: fixed;
		bottom: 20px;
		right: 20px;
		background-color: #ffdddd;
		border: 1px solid red;
		padding: 15px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		z-index: 1000;
		color: red;
	}
</style>

<div class="container">
	<div class="header">
		<h1>Distance Calculator</h1>
		<button class="history-button" on:click={goToHistory}>View Historical Queries</button>
	</div>
  
  <p>Prototype web application for calculating the distances between addresses.</p>

	<div class="input-row">
		<div class="input-group">
			<label for="source">Source Address</label>
			<input id="source" bind:value={source} placeholder="Enter source address" maxlength="255" />
		</div>
		<div class="input-group">
			<label for="destination">Destination Address</label>
			<input id="destination" bind:value={destination} placeholder="Enter destination address" maxlength="255" />
		</div>

		<div class="radio-group">
			<p>Unit</p>
			<label><input type="radio" bind:group={$selectedUnit} value="miles" /> Miles</label>
			<label><input type="radio" bind:group={$selectedUnit} value="km" /> Kilometers</label>
			<label><input type="radio" bind:group={$selectedUnit} value="both" /> Both</label>
		</div>
	</div>

	<button class="calculate-button" on:click={fetchDistance} disabled={$loading}>
		{$loading ? 'Calculating...' : 'Calculate Distance'}
	</button>

	<div class="results-container">
		{#if $distanceKm !== null}
			<div class="distance-display">
				<p>Distance</p>
				{#if $selectedUnit === 'miles' || $selectedUnit === 'both'}
					<p>{$distanceMiles} miles</p>
				{/if}
				{#if $selectedUnit === 'km' || $selectedUnit === 'both'}
					<p>{$distanceKm} km</p>
				{/if}
			</div>
		{/if}
	</div>

	{#if $errorMessage}
		<div class="error-popup">
			{$errorMessage}
		</div>
	{/if}
</div>