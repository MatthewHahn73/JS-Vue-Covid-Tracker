<template>
    <div class="Vertically_Center_Parent">
        <div class="Vertically_Center">
            <div class="Horizontal_Center">
                <h1 class="Header">Most Affected Countries</h1>
            </div>
            <div class="Horizontal_Center">
                <div class="Table_Div">
                    <table class="Table">
                        <thead>
                            <tr>
                                <th>Ranking</th>
                                <th>Country</th>
                                <th>Active Cases</th>
                                <th>Vaccinations</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>China</th>
                                <th>39781504</th>
                                <th>186018</th>
                                <th>432432</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>United States</th>
                                <th>2034507</th>
                                <th>92162</th>
                                <th>357124</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>France</th>
                                <th>362818</th>
                                <th>52512</th>
                                <th>94321</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th>UK</th>
                                <th>112837</th>
                                <th>87828</th>
                                <th>169199</th>
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
    props: {
        msg: String
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
}

.Table {
    color: white;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}

.Table thead tr {
    display: table;
    width: 100%;
}

.Table tbody tr {
    display: table;
    width: 100%;
}

.Table th {
    border: 1px solid black;
    width: 20%;
    text-align: center;
    border: none;
    cursor: default;
    white-space: nowrap;
}

.Table thead {
    display: table;
    width: 100%;
}

.Table tbody {
    display: block;
    height: 50%;
    width: 100%;
    overflow-y: auto;
}

.Table tbody th:nth-child(3) {
    color: orange;
}

.Table tbody th:nth-child(4) {
    color: green;
}

.Table tbody th:nth-child(5) {
    color: red;
}
</style>
