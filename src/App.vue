<template>
	<div>
		<CovidDashboardHeader />
	</div>
	<div style="width: 100%;">
		<div class="left">
			<CovidTables />
		</div>
		<div class="right">
			<div class="top">
				<CovidList />
			</div>
			<div class="bottom">
				<CovidPieChart />
			</div>
		</div>
	</div>
</template>

<script>
import CovidDashboardHeader from './components/CovidDashboardHeader.vue'
import CovidTables from './components/CovidTables.vue'
import CovidList from './components/CovidList.vue'
import CovidPieChart from './components/CovidPieChart.vue'

export default {
	name: 'App',
	components: {
		CovidTables,
		CovidList,
		CovidPieChart,
		CovidDashboardHeader
	},
}

</script>

<style>
html {
	background-color: #323232;
}

#app {
	height: 98vh;
	width: 100%;
	display: table;
}

.left {
	width: 50vw;
	display: table-cell;
	vertical-align: middle;
	/*border: 3px solid orange;*/
}

.right {
	width: 50vw;
	display: table-cell;
	/*border: 3px solid cyan;*/
}

.top {
	height: 40vh;
	vertical-align: top;
	/*border: 3px solid purple;*/
}

.bottom {
	height: 40vh;
	vertical-align: bottom;
	/*border: 3px solid green;*/
}
</style>
