<template>
    <div class="Vertically_Center_Parent">
        <div class="Vertically_Center">
            <div class="Horizontal_Center">
                <h1 class="Header">Most Affected Countries</h1>
            </div>
            <div class="Horizontal_Center">
                <div class="Table_Div">
                    <table id="Country_Table" class="Table">
                        <thead>
                            <tr>
                                <th v-on:click="sortColumn(0, 'Country_Table', this.innerText.indexOf(' ▼') > -1 ? 'Desc' : 'Asc');">Ranking</th>
                                <th v-on:click="sortColumn(1, 'Country_Table', this.innerText.indexOf(' ▼') > -1 ? 'Desc' : 'Asc');">Country</th>
                                <th v-on:click="sortColumn(2, 'Country_Table', this.innerText.indexOf(' ▼') > -1 ? 'Desc' : 'Asc');">Population</th>
                                <th v-on:click="sortColumn(3, 'Country_Table', this.innerText.indexOf(' ▼') > -1 ? 'Desc' : 'Asc');">Total Cases</th>
                                <th v-on:click="sortColumn(4, 'Country_Table', this.innerText.indexOf(' ▼') > -1 ? 'Desc' : 'Asc');">Recovered</th>
                                <th v-on:click="sortColumn(5, 'Country_Table', this.innerText.indexOf(' ▼') > -1 ? 'Desc' : 'Asc');">Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in RelevantCovidData" v-bind:key="item.score">
                                <td>{{ item.score }}</td>
                                <td>{{ item.country }}</td>
                                <td>{{ item.population }}</td>
                                <td>{{ item.cases }}</td>
                                <td>{{ item.recovered }}</td>
                                <td>{{ item.deaths }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CovidList',
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
                        this.buildData(data);
                    })
            } catch (e) {
                console.log(e);
            }
        },
        buildData(RawData) {
            var ScoreCount = 0;
            RawData.sort(function (a, b) { return b.cases - a.cases });
            RawData.forEach(Item => {
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
        quickSort(Column, Array) {     //Sorting function with recursive quick sort implementation
            if (Array.length <= 1) {
                return Array;
            } else {
                var left = [];
                var right = [];
                var newArray = [];
                var pivot = Array.shift();
                var length = Array.length;

                for (var i = 0; i < length; ++i) {
                    if (Array[i][Column][0] === "N/A")                 //Blank Value
                        left.push(Array[i]);
                    else if (Array[i][Column][0].indexOf('/') > 0) {   //Dates
                        var xDate = new Date(Array[i][Column][0]);
                        var yDate = new Date(pivot[Column][0]);
                        if (xDate.getTime() < yDate.getTime())
                            left.push(Array[i]);
                        else
                            right.push(Array[i]);
                    } else if (isNaN(Array[i][Column][0])) {           //Characters
                        if (Array[i][Column][0].toLowerCase() < pivot[Column][0].toLowerCase())
                            left.push(Array[i]);
                        else
                            right.push(Array[i]);
                    } else if (!isNaN(Array[i][Column][0])) {          //Numbers
                        if (Number(Array[i][Column][0]) < Number(pivot[Column][0]))
                            left.push(Array[i]);
                        else
                            right.push(Array[i]);
                    }
                } return newArray.concat(this.quickSort(Column, left), [pivot], this.quickSort(Column, right));
            }
        },
        sortColumn(Column, Table_Name, Direction) {
            var Tbl = document.getElementById(Table_Name);
            var Array_Tbl = [];
            var Visible_Tbl = [];
            var Sorted_Array_Tbl = [];

            for (var a = 1, FirstRow; FirstRow = Tbl.rows[a]; ++a) {
                var Firstcols = FirstRow.getElementsByTagName("td");
                var Temp_Array = [];
                if (FirstRow.style.display !== "none") {
                    for (var b = 0; b < Firstcols.length; ++b) {
                        Temp_Array.push([this.returnTextboxFromString(Firstcols[b].innerHTML), Firstcols[b].innerHTML]);
                    } Array_Tbl.push(Temp_Array);
                }
            }

            Sorted_Array_Tbl = Direction == "Asc"
                ? this.quickSort(Column, Array_Tbl)
                : this.quickSort(Column, Array_Tbl).reverse();

            for (var i = 1, SecondRow; SecondRow = Tbl.rows[i]; ++i) {
                if (SecondRow.style.display !== "none")
                    Visible_Tbl.push(SecondRow);
            }

            for (var j = 0; j < Visible_Tbl.length; ++j) {
                var Secondcols = Visible_Tbl[j].getElementsByTagName("td");
                for (var k = 0; k < Secondcols.length; ++k)
                    Secondcols[k].innerHTML = Sorted_Array_Tbl[j][k][1];
            }
        },
        returnTextboxFromString(String) {
            if (String.indexOf('name=') > -1) {
                var Start = String.indexOf('name="') + 6;
                var End = String.indexOf('"', Start);
                return document.getElementsByName(String.substring(Start, End))[0].value;
            } return String;
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

.Table_Div {
    width: 100%;
    height: 200px;
    overflow: auto;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

table thead th {
    width: 16.6%;
    color: white;
    text-align: left;
    position: sticky;
    top: 0;
    background-color: #334c7f;
}

table tbody td {
    width: 16.6%;
    text-align: left;
    color: white;
    padding: 3px 5px;
}

table tbody td:nth-child(4) {
    color: orange;
}

table tbody td:nth-child(5) {
    color: green;
}

table tbody td:nth-child(6) {
    color: #d86b5d;
}
</style>
