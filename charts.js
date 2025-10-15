(function(){
function initializeCharts() {
const pd = window.profileData;


// Victims Chart (Bar Chart)
const victimsCtx = document.getElementById('victimsChart').getContext('2d');
new Chart(victimsCtx, {
type: 'bar',
data: {
labels: pd.victimsSeries.map(i => i.label),
datasets: [{
label: 'Number of Victims',
data: pd.victimsSeries.map(i => i.value),
backgroundColor: '#4cc3ff',
borderColor: '#2a8fcc',
borderWidth: 1
}]
},
options: {
responsive: true, maintainAspectRatio: false,
scales: {
y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#9fb0c3' } },
x: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#9fb0c3' } }
},
plugins: { legend: { labels: { color: '#e6edf3' } } }
}
});


// Sectors Chart (Doughnut)
const sectorsCtx = document.getElementById('sectorsChart').getContext('2d');
new Chart(sectorsCtx, {
type: 'doughnut',
data: {
labels: pd.sectors.map(s => s.sector),
datasets: [{
data: pd.sectors.map(s => s.pct),
backgroundColor: ['#4cc3ff','#3690c0','#034e7b','#a6bddb','#2a8fcc'],
borderColor: '#121821', borderWidth: 2
}]
},
options: { responsive: true, maintainAspectRatio: false,
plugins: { legend: { position: 'right', labels: { color: '#e6edf3', padding: 15 } } }
}
});
}


window.initializeCharts = initializeCharts;
})();