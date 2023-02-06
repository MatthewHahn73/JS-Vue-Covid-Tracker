<template>
    <div class="Vertically_Center_Parent_Headers">
        <div class="Vertically_Center_Headers">
            <div class="Horizontal_Center_Headers">
                <div>
                    <div class="small_column">
                        <h1>Todays Cases</h1>
                        <h3>{{ todaysCases }}</h3>
                    </div>
                    <div class="small_column">
                        <h1>Todays Recovered</h1>
                        <h3>{{ todaysRecovered }}</h3>
                    </div>
                    <div class="small_column">
                        <h1>Todays Deaths</h1>
                        <h3>{{ todaysDeaths }}</h3>
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
            todaysCases: 0,
            todaysRecovered: 0,
            todaysDeaths: 0
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
                        this.todaysCases = this.labelNumber(data.todayCases); 
                        this.todaysRecovered = this.labelNumber(data.todayRecovered);  
                        this.todaysDeaths = this.labelNumber(data.todayDeaths);  
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
