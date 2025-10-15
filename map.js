(function(){
function initializeMap() {
const container = document.getElementById('map-container');
const width = container.clientWidth;
const height = 400;


const svg = d3.select(container).append('svg').attr('width', width).attr('height', height);
const projection = d3.geoMercator().scale(130).translate([width/2, height/1.5]);
const path = d3.geoPath().projection(projection);
const g = svg.append('g');


d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(function(world){
const countries = topojson.feature(world, world.objects.countries);
const incidentsByCountry = {};
(window.profileData.countries || []).forEach(c => { incidentsByCountry[c.name] = c.incidents; });


g.selectAll('path').data(countries.features).enter().append('path')
.attr('d', path)
.attr('fill', d => {
const n = incidentsByCountry[d.properties.name] || 0;
if (n >= 10) return '#034e7b';
if (n >= 5) return '#3690c0';
if (n > 0) return '#a6bddb';
return '#1a2330';
})
.attr('stroke', '#243246')
.attr('stroke-width', 0.5)
.on('mouseover', function(event, d){
const name = d.properties.name;
const n = incidentsByCountry[name] || 0;
d3.select(this).attr('stroke', '#4cc3ff').attr('stroke-width', 2);
tooltip.style('opacity', 1).html(`<strong>${name}</strong><br/>${n} incident(s)`)
.style('left', (event.pageX + 10) + 'px')
.style('top', (event.pageY - 28) + 'px');
})
.on('mouseout', function(){
d3.select(this).attr('stroke', '#243246').attr('stroke-width', 0.5);
tooltip.style('opacity', 0);
});


const zoom = d3.zoom().scaleExtent([1,8]).on('zoom', (event)=>{ g.attr('transform', event.transform); });
svg.call(zoom);


document.getElementById('map-zoom-in').addEventListener('click', ()=> svg.transition().call(zoom.scaleBy, 1.5));
document.getElementById('map-zoom-out').addEventListener('click', ()=> svg.transition().call(zoom.scaleBy, 0.75));
document.getElementById('map-reset').addEventListener('click', ()=> svg.transition().call(zoom.transform, d3.zoomIdentity));
}).catch(function(err){
console.error('Error loading map data:', err);
container.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);"><div style="text-align:center;"><div style="font-size:48px;margin-bottom:10px;">🗺️</div><div>World map unavailable. Check your connection or try refreshing.</div></div></div>`;
});


const tooltip = d3.select('body').append('div')
.attr('class','tooltip')
.style('position','absolute')
.style('background','#121821')
.style('color','#e6edf3')
.style('padding','8px')
.style('border-radius','6px')
.style('border','1px solid #243246')
.style('pointer-events','none')
.style('opacity',0)
.style('z-index',1000);
}


window.initializeMap = initializeMap;
})();