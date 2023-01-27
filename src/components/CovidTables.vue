<template>
	<div class="Vertically_Center_Parent">
		<div class="Vertically_Center">
			<div class="Horizontal_Center">
				<div class="Table_Row">
					<table class="charts-css area show-heading show-labels">
						<caption> Total Active Covid Cases (2020 - Present) </caption>
						<tbody>
							<tr>
								<th scope="row">
									2020
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2021
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2022
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2023
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<br />
			<div class="Horizontal_Center">
				<div class="Table_Row">
					<table class="charts-css area show-heading show-labels">
						<caption> Total Vaccinations (2020 - Present) </caption>
						<tbody>
							<tr>
								<th scope="row">
									2020
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2021
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2022
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2023
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<br />
			<div class="Horizontal_Center">
				<div class="Table_Row">
					<table class="charts-css area show-heading show-labels">
						<caption> Total Covid Related Deaths (2020 - Present) </caption>
						<tbody>
							<tr>
								<th scope="row">
									2020
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2021
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2022
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									2023
								</th>
								<td style="--start: 1.0; --size: 0.65;">
									<span class="data"> 65 </span>
								</td>
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
	props: {
		msg: String
	}
}
</script>
<style scoped>
.Vertically_Center_Parent {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 48vh;
    width: 100%;
}

.Vertically_Center {
    position: relative;
    width: 100%;
}

.Horizontal_Center {
    display: flex;
    justify-content: center;
}

.Table_Row {
	height: 20vh;
	width: 70%;
}

tr,
td,
th,
caption {
	color: white;
}
</style>
