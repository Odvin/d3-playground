async function drawCircles() {
  const data = await d3.csv('./data/ages.csv');
  data.forEach((d) => {
    d.age = Number(d.age);
  });

  const svg = d3
    .select('#chart-area')
    .append('svg')
    .attr('width', 400)
    .attr('height', 400);

  const circles = svg.selectAll('circle').data(data);

  circles
    .enter()
    .append('circle')
    .attr('cx', (d, i) => i * 50 + 50)
    .attr('cy', 250)
    .attr('r', (d) => 2 * d.age)
    .attr('fill', (d) => (d.name === 'Tony' ? 'blue' : 'red'));
}

try {
  drawCircles();
} catch (error) {
  console.error(error);
  throw error;
}
