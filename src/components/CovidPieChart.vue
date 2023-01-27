<template>
    <div class="Vertically_Center_Parent">
        <div class="Vertically_Center">
            <div class="Horizontal_Center">
                <div id="Pie_Chart_Raw_Numbers" class="Column">
                    <div>
                        <div class="piechart_raw"></div>
                        <h1>Totals</h1>
                    </div>
                </div>
                <div id="Pie_Chart_Vaccinated_Percentage" class="Column">
                        <div class="piechart_vaccinated"></div>
                        <h1>Vaccinated Percentages</h1>
                </div>
                <div id="Pie_Chart_Cases_vs_Deaths" class="Column">
                        <div class="piechart_cases"></div>
                        <h1>Cases vs Deaths</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CovidPieChart',
    props: {
        msg: String
    }
}
</script>

<style scoped>
h1 {
    font-size: 18px;
    color: white;
    text-align: center;
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

.piechart_raw {
    width: 200px;
    height: 22vh;
    border-radius: 50%;
    background-image: conic-gradient(white 70deg,
            green 0 70deg,
            red 0 235deg,
            orange 0);
}

.piechart_vaccinated {
    width: 200px;
    height: 22vh;
    border-radius: 50%;
    background-image: conic-gradient(pink 70deg,
            lightblue 0 235deg,
            orange 0);
}

.piechart_cases {
    width: 200px;
    height: 22vh;
    border-radius: 50%;
    background-image: conic-gradient(green 180deg,
            red 0 180deg);
}
</style>
