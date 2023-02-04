<template>
	<div class="Vertically_Center_Parent">
		<div class="Vertically_Center">
			<div class="Horizontal_Center">
				<div class="Graph_Row">
					<h3>Worldwide Covid Cases [Total]</h3>
					<area-chart :data=CovidDataCasesAll loading="Loading..." width="200" height="150"></area-chart>
				</div>
			</div>
			<br />
			<div class="Horizontal_Center">
				<div class="Graph_Row">
					<h3>Worldwide Vaccine Doses [Total]</h3>
					<area-chart :data=CovidDataVaccinatedAll loading="Loading..." width="200" height="150"></area-chart>
				</div>
			</div>
			<br />
			<div class="Horizontal_Center">
				<div class="Graph_Row">
					<h3>Worldwide Covid Deaths [Total]</h3>
					<area-chart :data=CovidDataDeathsAll loading="Loading..." width="200" height="150"></area-chart>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			CovidDataCasesAll: {},
			CovidDataVaccinatedAll: {},
			CovidDataDeathsAll: {}
		}
	},
	created() {
		this.fetchData();
	},
	methods: {
		fetchData() {
			try {
				fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
					.then(res => res.json())
					.then(data => {
						this.buildCaseDeathData(data);
					})
				fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=all")
					.then(res => res.json())
					.then(data => {
						this.buildVaccinationData(data);
					})
			} catch (e) {
				console.log(e);
			}
		},
		buildCaseDeathData(data) {
			try {
				this.CovidDataCasesAll = data.cases;
				this.CovidDataDeathsAll = data.deaths;
			} catch (e) {
				console.log(e);
			}
		},
		buildVaccinationData(data) {
			try {
				var DateVaccinations = [];
				for (const [key, value] of Object.entries(data)) {
					var Country = value.timeline;
					for (const [key, value] of Object.entries(Country)) {
						DateVaccinations.push({
							"Date": key,
							"Cases": value
						});
					}
				}
				var CovidDataVaccinatedAllArr = this.sumByKey(DateVaccinations, 'Date', 'Cases');
				var CovidDataVaccinatedAllObject = this.arrayToObject(CovidDataVaccinatedAllArr);
				this.CovidDataVaccinatedAll = CovidDataVaccinatedAllObject; 
			} catch (e) {
				console.log(e);
			}
		},
		sumByKey(arr, key, value) {
			const map = new Map();
			for (const obj of arr) {
				const currSum = map.get(obj[key]) || 0;
				map.set(obj[key], currSum + obj[value]);
			}
			const res = Array.from(map, ([k, v]) => ({ [key]: k, [value]: v }));
			return res;
		},
		arrayToObject(arr) {
			var returnObject = {};
			for(var i=0; i<arr.length; ++i) 
				returnObject[arr[i].Date] = arr[i].Cases;
			return returnObject;
		}
	}
}
</script>
<style scoped>
h3 {
	color: white;
	font-size: 14px;
	text-align: center;
}

.Vertically_Center_Parent {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 48vh;
	width: 100%;
}

.Vertically_Center {
	position: relative;
	width: 100%;
}

.Horizontal_Center {
	display: flex;
	justify-content: center;
}

.Graph_Row {
	height: 20vh;
	width: 70%;
}

tr,
td,
th,
caption,
#Total_Cases_Graph {
	color: white;
}
</style>
