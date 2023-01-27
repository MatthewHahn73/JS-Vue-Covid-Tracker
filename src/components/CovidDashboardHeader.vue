<template>
    <br />
    <br />
    <div class="Horizontal_Center">
        <h1>SARS-CoV-2 Dashboard</h1>
        <h3>Last Updated:  1/26/2023, 5:21 PM</h3>
    </div>
</template>

<script>
export default {
    name: 'CovidDashboardHeader',
    props: {
        msg: String
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
