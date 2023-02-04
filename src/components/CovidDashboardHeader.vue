<template>
    <br />
    <br />
    <div class="Horizontal_Center">
        <h1>SARS-CoV-2 Dashboard</h1>
        <h3>Last Updated: {{ dateupdated }}</h3>
        <h3>Current Date: {{ timestamp }}</h3>
        <h3>Sourced by <a href="https://disease.sh/">Disease.sh</a></h3>
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
        setInterval(this.getNow, 100);
        this.fetchData();
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
        getNow: function () {
            const today = new Date();
            const date = (today.getMonth() + 1) + '-' + today.getDate() + '-' +today.getFullYear()    
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

.Horizontal_Center {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>
