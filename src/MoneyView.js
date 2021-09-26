import React, { Component } from 'react';
import  * as d3 from 'd3';

function draw_barchart(svg, radius, data) {

      // set the color scale
      const color = d3.scaleOrdinal()
        .range(["#98abc5",
        "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

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
        .attr('fill', function(d){ return(color(d.data[1]))})
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
}
class MoneyView extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {bank:1, test:123};
        const width = 450,
            height = 450,
            margin = 40;
        this.radius = Math.min(width, height) / 2 - margin;

        // append the svg object to the div called 'my_dataviz'
    }
        componentDidMount(){
            const svg = d3.select("#test")
            .append("svg")
            .attr("width", 450)
            .attr("height", 450)
            .append("g")
            .attr("transform", `translate(${450/2}, ${450/2})`);

            draw_barchart(svg, this.radius, this.state);
        }
        handleChange(event) {
            if (event.target.value !== ''){
                this.setState({'bank':event.target.value});
                var svg = d3.select("#test")
                .select("svg").remove();
                svg = d3.select("#test")
                .append("svg")
                .attr("width", 450)
                .attr("height", 450)
                .append("g")
                .attr("transform", `translate(${450/2}, ${450/2})`);

                draw_barchart(svg, this.radius, this.state);
            }
        }
    render() {
        let input = null;
        const {bank} = this.state;
        input = <input type="number" id="bank" value={bank} onChange={this.handleChange}/>;
        return (
            <div>
                <div>
                    <h1>Todo list</h1>
                    {input}
                    <h1>list</h1>
                    {this.state.bank}
                </div>
                <div id='test'>
                </div>
            </div>
        );
    }
}


export default MoneyView;