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
        .attr('fill', function(d){ return(color(d.data[0]))})
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
}
class MoneyView extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {money:{'cash':1, 'stock':1}};
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
                var money_state = this.state.money;
                var target_id = event.target.id;
                money_state[target_id] = event.target.value;
                console.log(event.target.id +':'+event.target.value)
                this.setState({'money':money_state});
                var svg = d3.select("#test")
                .select("svg").remove();
                svg = d3.select("#test")
                .append("svg")
                .attr("width", 450)
                .attr("height", 450)
                .append("g")
                .attr("transform", `translate(${450/2}, ${450/2})`);

                draw_barchart(svg, this.radius, this.state.money);
            }
        }
    render() {
        let input_bank, input_stock;
        const money_state = this.state.money;
        input_bank = <input type="number" id="cash" value={money_state['cash']} onChange={this.handleChange}/>;
        input_stock = <input type="number" id="stock" value={money_state['stock']} onChange={this.handleChange}/>;

        return (
            <div>
                <div>
                    <h1>Todo list</h1>
                    {input_bank}
                    {input_stock}
                    <h1>list</h1>
                    {money_state['cash']}


                </div>
                <div id='test'>
                </div>
            </div>
        );
    }
}


export default MoneyView;