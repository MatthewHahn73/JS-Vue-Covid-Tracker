<template>
    <div class="Vertically_Center_Parent_Headers">
        <div class="Vertically_Center_Headers">
            <div class="Horizontal_Center_Headers">
                <div>
                    <div class="small_column">
                        <h1>Active Cases</h1>
                        <h3>{{ activeCases }}</h3>
                    </div>
                    <div class="small_column">
                        <h1>Total Cases</h1>
                        <h3>{{ totalCases }}</h3>
                    </div>
                    <div class="small_column">
                        <h1>Total Deaths</h1>
                        <h3>{{ totalDeaths }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeCases: 0,
            totalCases: 0,
            totalDeaths: 0
        }
    },
    created() {
        this.fetchData();
        setInterval(this.fetchData, 300000);     //Check for updates every 5 minutes
    },
    methods: {
        fetchData() {
            try {
                fetch("https://disease.sh/v3/covid-19/all")
                    .then(res => res.json())
                    .then(data => {
                        this.activeCases = this.labelNumber(data.active);
                        this.totalCases = this.labelNumber(data.cases); 
                        this.totalDeaths = this.labelNumber(data.deaths); 
                    })
            } catch (e) {
                console.log(e);
            }
        },
        labelNumber(num) {
            return num.toLocaleString('en', {useGrouping:true});
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 14px;
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
}

h3 {
    font-size: 22px;
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
}

.small_column {
    float: left;
    width: 33%;
    text-align: center;
}
</style>
