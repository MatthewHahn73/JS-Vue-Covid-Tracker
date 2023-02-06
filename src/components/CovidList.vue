<template>
    <div class="Vertically_Center_Parent">
        <div class="Vertically_Center">
            <div class="Horizontal_Center">
                <h1 class="Header">Affected Rankings</h1>
            </div>
            <table id="Country_Table">
                <thead>
                    <tr id="Header_Row">
                        <th>Ranking</th>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Total Cases</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    <simplebar class="scrollbar">
                        <tr v-for="item in RelevantCovidData" v-bind:key="item.score">
                            <td>{{ item.score }}</td>
                            <td>{{ item.country }}</td>
                            <td>{{ item.population }}</td>
                            <td>{{ item.cases }}</td>
                            <td>{{ item.recovered }}</td>
                            <td>{{ item.deaths }}</td>
                        </tr>
                    </simplebar>
                </tbody>
            </table>
            <div>
                <br />
                <div class="Tab_Structure Horizontal_Center">
                    <button class="Tab Tab_Active"
                        @click="buildData(JSON.parse(JSON.stringify(RelevantCovidData)), 'Cases'); tabFilter($event.explicitOriginalTarget);">Cases</button>
                    <button class="Tab"
                        @click="buildData(JSON.parse(JSON.stringify(RelevantCovidData)), 'Recovered'); tabFilter($event.explicitOriginalTarget);">Recovered</button>
                    <button class="Tab"
                        @click="buildData(JSON.parse(JSON.stringify(RelevantCovidData)), 'Deaths'); tabFilter($event.explicitOriginalTarget);">Deaths</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

export default {
    name: 'CovidList',
    components: {
        simplebar,
    },
    data() {
        return {
            RelevantCovidData: []
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            try {
                fetch("https://disease.sh/v3/covid-19/countries")
                    .then(res => res.json())
                    .then(data => {
                        this.buildData(data, "Cases");
                    })
            } catch (e) {
                console.log(e);
            }
        },
        buildData(Data, SortingType) {
            var ScoreCount = 0;
            Data.sort(function (a, b) {
                switch (SortingType) {
                    case "Cases":
                        return b.cases - a.cases;
                    case "Recovered":
                        return b.recovered - a.recovered;
                    case "Deaths":
                        return b.deaths - a.deaths;
                }
            });
            this.RelevantCovidData = [];
            Data.forEach(Item => {
                ++ScoreCount;
                this.RelevantCovidData.push({
                    score: ScoreCount,
                    country: Item.country.trim(),
                    population: Item.population,
                    cases: Item.cases,
                    recovered: Item.recovered,
                    deaths: Item.deaths,
                });
            });
        },
        tabFilter(Tab) {
            if (!Tab.classList.contains("Tab_Active")) {
                var Tabs = document.getElementsByClassName("Tab");
                for (var i = 0; i < Tabs.length; ++i)
                    Tabs[i].classList.remove("Tab_Active");
                Tab.classList.add("Tab_Active");
            }
        },
        labelNumber(num) {
            return num.toLocaleString('en', { useGrouping: true });
        },
        unlabelNumber(num) {
            return Number(num.replace(",", ""))
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 18px;
    color: white;
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
    width: 80%;
}

.Horizontal_Center {
    display: flex;
    justify-content: center;
}

.Tab_Structure {
    width: auto;
}

.Tab {
    background-color: #ddd;
    color: black;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 600;
    font-size: 13px;
    height: 23px;
    width: auto;
    vertical-align: middle;
}

.Tab_Active {
    background-color: #334c7f;
    color: white;
    transition: all .2s;
}

.scrollbar {
    width: 100%;
    height: 200px;
}

table,
td {
    width: 100%;
    border-collapse: collapse;
}

thead {
    display: table;
    width: 100%;
    color: white;
    background-color: #334c7f;
    font-size: 16px;
}

tbody {
    display: block;
    height: 200px;
    color: white;
    font-size: 15px;
}

th,
td {
    width: 16.6%;
    padding: 3px 1px;
    word-break: break-all;
}

tr {
    display: table;
    width: 100%;
}

td {
    text-align: center;
    border-bottom: none;
    border-left: none;
}
</style>
