<template>
    <div class="Vertically_Center_Parent_Headers">
        <div class="Vertically_Center_Headers">
            <div class="Horizontal_Center_Headers">
                <h1>SARS-CoV-2 Dashboard</h1>
                <h3>Data Last Updated: {{ dateupdated }}</h3>
                <h3>Current Date: {{ timestamp }}</h3>
                <h3>Sourced by <a href="https://disease.sh/">Disease.sh</a></h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timestamp: "",
            dateupdated: ""
        }
    },
    created() {
        this.getNow();
        this.fetchData();
        setInterval(this.getNow, 1000);          //Check every second
        setInterval(this.fetchData, 300000);     //Check for updates every 5 minutes
    },
    methods: {
        fetchData() {
            try {
                fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1")
                    .then(res => res.json())
                    .then(data => {
                        this.getDiseaseDate(data);
                    })
            } catch (e) {
                console.log(e);
            }
        },
        getDiseaseDate(data) {
            this.dateupdated = Object.keys(data[0].timeline)[0].replaceAll("/", "-");
        },
        getNow() {
            const today = new Date();
            const date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date + ' ' + time;
            this.timestamp = dateTime;
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 36px;
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
}

h3 {
    font-size: 14px;
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
}

</style>
