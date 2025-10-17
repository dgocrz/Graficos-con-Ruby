async function cargarGrafica() {
  const respuesta = await fetch('/data');
  const datos = await respuesta.json();

  const ctx = document.getElementById('grafica').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: datos.labels,
      datasets: [{
        label: 'Ventas mensuales 2025',
        data: datos.values,
        
      }]
    },
    options:{
      animation,
    interaction: {
      intersect: false
    },
        responsive: true,
        color:'red',
        plugins: {
      legend: {
        position: 'top',
      }
    }
}
  });
}

cargarGrafica();
