<template>
    <div class="Vertically_Center_Parent">
        <div class="Vertically_Center">
            <div class="Horizontal_Center">
                <h1 class="Header">Affected Percentages</h1>
            </div>
            <div class="Horizontal_Center">
                <div class="Column">
                    <div class="piechart">
                        <pie-chart :data="RelevantCovidDataAll" loading="Loading..." :legend="false" :donut="true" height="200px"></pie-chart>
                        <h1>Total Affected</h1>
                    </div>
                </div>
                <div class="Column">
                    <div class="piechart">
                        <pie-chart :data="RelevantCovidDataCountries" loading="Loading..." :legend="false" :donut="true" height="200px"></pie-chart>
                        <h1>Cases</h1>
                    </div>
                </div>
                <div class="Column">
                    <div class="piechart">
                        <pie-chart :data="RelevantCovidDataVaccinated" loading="Loading..." :legend="false" :donut="true" height="200px"></pie-chart>
                        <h1>Vaccination Doses</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'CovidPieChart',
    data() {
        return {
            RelevantCovidDataAll: {},
            RelevantCovidDataCountries: {},
            RelevantCovidDataVaccinated: {}
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            try {
                fetch("https://disease.sh/v3/covid-19/all")
                    .then(res => res.json())
                    .then(data => {
                        this.buildDataAll(data);
                    })
                fetch("https://disease.sh/v3/covid-19/countries")
                    .then(res => res.json())
                    .then(data => {
                        this.buildDataCountries(data);
                    })
                fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries/")
                    .then(res => res.json())
                    .then(data => {
                        this.buildDataVaccinations(data);
                    })
            } catch (e) {
                console.log(e);
            }
        },
        buildDataAll(data) {
            this.RelevantCovidDataAll = {
                "Cases": data.cases,
                "Recovered": data.recovered,
                "Deaths": data.deaths
            }
        },
        buildDataCountries(data) {
            var RelevantCovidDataCountriesTemp = {};
            var OutsideTop100 = 0;
            data.sort((a, b) => { return b.cases - a.cases; });     //Sort countries by cases; Desc order
            for (var i = 0; i < 100; ++i)                           //Set top 50 countries; Set rest to 'other'
                RelevantCovidDataCountriesTemp[data[i].country] = data[i].cases;
            for (var j = 100; j < data.length; ++j)
                OutsideTop100 += data[i].cases;
            RelevantCovidDataCountriesTemp["Other"] = OutsideTop100;
            this.RelevantCovidDataCountries = RelevantCovidDataCountriesTemp;
        },
        buildDataVaccinations(data) {
            var RelevantCovidDataVaccinatedArr = [];
            var RelevantCovidDataVaccinatedTemp = {};
            var OutsideTop100 = 0;
            var TodaysDate = this.getTodaysDate();
            for (var i = 0; i < data.length; ++i) {                          
                RelevantCovidDataVaccinatedArr.push({
                    "Country" : data[i].country,
                    "Vaccinations" : data[i].timeline[TodaysDate]
                });
            }
            RelevantCovidDataVaccinatedArr.sort((a, b) => { return b.Vaccinations - a.Vaccinations; });     //Sort countries by vaccinations; Desc order
            for (var j = 0; j < 100; ++j)                                                                    //Set top 50 countries; Set rest to 'other'
                RelevantCovidDataVaccinatedTemp[RelevantCovidDataVaccinatedArr[j].Country] = RelevantCovidDataVaccinatedArr[j].Vaccinations;
            for (var k = 100; k < data.length; ++k)
                OutsideTop100 += RelevantCovidDataVaccinatedArr[k].Vaccinations;
            RelevantCovidDataVaccinatedTemp["Other"] = OutsideTop100;
            this.RelevantCovidDataVaccinated = RelevantCovidDataVaccinatedTemp;
        },
        getTodaysDate() {
            var today = new Date();
            var dd = String(today.getDate());
            var mm = String(today.getMonth() + 1);
            var yyyy = today.getFullYear();
            return mm + '/' + dd + '/' + yyyy.toString().slice(2);
        },
        labelNumber(num) {
            return num.toLocaleString('en', {useGrouping:true});
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 18px;
    color: white;
    text-align: center;
    padding: 0;
}

h3 {
    font-size: 14px;
    color: white;
    text-align: center;
    padding: 0;
}

.Column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.Vertically_Center_Parent {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 40vh;
    width: 100%;
}

.Vertically_Center {
    position: relative;
    width: 90%;
}

.Horizontal_Center {
    display: flex;
    justify-content: center;
}

.piechart {
    width: 10vw;
}
</style>
