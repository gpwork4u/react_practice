import React, { Component } from 'react';
import  * as d3 from 'd3';

class Barchart extends Component {
    componentDidMount() {
        const width = 450,
        height = 450,
        margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    const svg = d3.select("#test")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", `translate(${width/2}, ${height/2})`);

    // Create dummy data
    const data = {a: 9, b: 20, c:30, d:8, e:12}

    // set the color scale
    const color = d3.scaleOrdinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
      .value(function(d) {return d[1]})
    const data_ready = pie(Object.entries(data))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .join('path')
      .attr('d', d3.arc()
        .innerRadius(radius-30)
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data[1])) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
    }
    render(){
        return (
            <div id="test"></div>

        )
    }

}
export default Barchart;