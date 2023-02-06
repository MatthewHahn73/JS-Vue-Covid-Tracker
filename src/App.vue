<template>
	<div class="header">
		<div class="column block">
			<CovidOverviewLeft />
		</div>
		<div class="column block">
			<CovidDashboardHeader />
		</div>
		<div class="column block">
			<CovidOverviewRight />
		</div>
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
import CovidOverviewLeft from './components/CovidOverviewLeft.vue'
import CovidOverviewRight from './components/CovidOverviewRight.vue'
import CovidTables from './components/CovidTables.vue'
import CovidList from './components/CovidList.vue'
import CovidPieChart from './components/CovidPieChart.vue'

export default {
	name: 'App',
	components: {
		CovidTables,
		CovidList,
		CovidPieChart,
		CovidDashboardHeader,
		CovidOverviewLeft,
		CovidOverviewRight
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

.header {
	vertical-align: top;
}

.left {
	width: 50vw;
	display: table-cell;
	vertical-align: middle;
/* 	border: 3px solid orange;
 */}

.right {
	width: 50vw;
	display: table-cell;
/* 	border: 3px solid cyan;
 */}

.top {
	height: 40vh;
	vertical-align: top;
/* 	border: 3px solid purple;
 */}

.bottom {
	height: 40vh;
	vertical-align: bottom;
/* 	border: 3px solid green;
 */}

.column {
    float: left;
    width: 33%;
    text-align: center;
/* 	border: 3px solid black;
 */}

.block {
    height: 15vh;
}

.Vertically_Center_Parent_Headers {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
}

.Vertically_Center_Headers {
    position: relative;
    width: 90%;
}

.Horizontal_Center_Headers {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

</style>
