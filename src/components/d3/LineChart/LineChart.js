/* eslint-disable no-undef */
/* eslint-disable max-lines */
import * as d3 from 'd3';
import React from 'react';

var Axis = React.createClass({
	propTypes: {
		h: React.PropTypes.number,
		axis: React.PropTypes.func,
		axisType: React.PropTypes.oneOf(['x', 'y']),
	},

	componentDidUpdate: function () {
		this.renderAxis();
	},
	componentDidMount: function () {
		this.renderAxis();
	},
	renderAxis: function () {
		var node = ReactDOM.findDOMNode(this);
		d3.select(node).call(this.props.axis);
	},
	render: function () {
		var translate = 'translate(0,' + this.props.h + ')';

		return (
			<g
				className='axis'
				transform={this.props.axisType === 'x' ? translate : ''}
			></g>
		);
	},
});

var Grid = React.createClass({
	propTypes: {
		h: React.PropTypes.number,
		grid: React.PropTypes.func,
		gridType: React.PropTypes.oneOf(['x', 'y']),
	},

	componentDidUpdate: function () {
		this.renderGrid();
	},
	componentDidMount: function () {
		this.renderGrid();
	},
	renderGrid: function () {
		var node = ReactDOM.findDOMNode(this);
		d3.select(node).call(this.props.grid);
	},
	render: function () {
		var translate = 'translate(0,' + this.props.h + ')';
		return (
			<g
				className='y-grid'
				transform={this.props.gridType === 'x' ? translate : ''}
			></g>
		);
	},
});

var ToolTip = React.createClass({
	propTypes: {
		tooltip: React.PropTypes.object,
	},
	render: function () {
		var visibility = 'hidden';
		var transform = '';
		var x = 0;
		var y = 0;
		var width = 150,
			height = 70;
		var transformText = 'translate(' + width / 2 + ',' + (height / 2 - 5) + ')';
		var transformArrow = '';

		if (this.props.tooltip.display === true) {
			var position = this.props.tooltip.pos;

			x = position.x;
			y = position.y;
			visibility = 'visible';

			//console.log(x,y);

			if (y > height) {
				transform = 'translate(' + (x - width / 2) + ',' + (y - height - 20) + ')';
				transformArrow = 'translate(' + (width / 2 - 20) + ',' + (height - 2) + ')';
			} else if (y < height) {
				transform = 'translate(' + (x - width / 2) + ',' + (Math.round(y) + 20) + ')';
				transformArrow = 'translate(' + (width / 2 - 20) + ',' + 0 + ') rotate(180,20,0)';
			}
		} else {
			visibility = 'hidden';
		}

		return (
			<g transform={transform}>
				<rect
					class='shadow'
					is
					width={width}
					height={height}
					rx='5'
					ry='5'
					visibility={visibility}
					fill='#6391da'
					opacity='.9'
				/>
				<polygon
					class='shadow'
					is
					points='10,0  30,0  20,10'
					transform={transformArrow}
					fill='#6391da'
					opacity='.9'
					visibility={visibility}
				/>
				<text
					is
					visibility={visibility}
					transform={transformText}
				>
					<tspan
						is
						x='0'
						text-anchor='middle'
						font-size='15px'
						fill='#ffffff'
					>
						{this.props.tooltip.data.key}
					</tspan>
					<tspan
						is
						x='0'
						text-anchor='middle'
						dy='25'
						font-size='20px'
						fill='#a9f3ff'
					>
						{this.props.tooltip.data.value + ' visits'}
					</tspan>
				</text>
			</g>
		);
	},
});

var Dots = React.createClass({
	propTypes: {
		data: React.PropTypes.array,
		x: React.PropTypes.func,
		y: React.PropTypes.func,
	},
	render: function () {
		var _self = this;

		//remove last & first point
		var data = this.props.data.splice(1);
		data.pop();

		var circles = data.map((d, i) => {
			return (
				<circle
					className='dot'
					r='7'
					cx={_self.props.x(d.date)}
					cy={_self.props.y(d.count)}
					fill='#7dc7f4'
					stroke='#3f5175'
					strokeWidth='5px'
					key={i}
					onMouseOver={_self.props.showToolTip}
					onMouseOut={_self.props.hideToolTip}
					data-key={d3.time.format('%b %e')(d.date)}
					data-value={d.count}
				/>
			);
		});

		return <g>{circles}</g>;
	},
});

var LineChart = React.createClass({
	propTypes: {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		chartId: React.PropTypes.string,
	},

	getDefaultProps: function () {
		return {
			width: 1000,
			height: 300,
			chartId: 'v1_chart',
		};
	},
	getInitialState: function () {
		return {
			tooltip: { display: false, data: { key: '', value: '' } },
			width: this.props.width,
		};
	},
	render: function () {
		var data = [
			{ day: '01-01-2017', count: 180 },
			{ day: '02-01-2017', count: 250 },
			{ day: '03-01-2017', count: 150 },
			{ day: '04-01-2017', count: 230 },
			{ day: '05-01-2017', count: 150 },
			{ day: '06-01-2017', count: 280 },
			{ day: '07-01-2017', count: 170 },
			{ day: '08-01-2017', count: 142 },
			{ day: '09-01-2017', count: 123 },
			{ day: '10-01-2017', count: 258 },
			{ day: '11-01-2017', count: 145 },
			{ day: '12-01-2017', count: 210 },
		];

		var margin = { top: 5, right: 50, bottom: 20, left: 50 },
			w = this.state.width - (margin.left + margin.right),
			h = this.props.height - (margin.top + margin.bottom);

		var parseDate = d3.time.format('%m-%d-%Y').parse;

		data.forEach((d) => {
			d.date = parseDate(d.day);
		});

		var x = d3.time
			.scale()
			.domain(
				d3.extent(data, (d) => {
					return d.date;
				}),
			)
			.rangeRound([0, w]);

		var y = d3.scale
			.linear()
			.domain([
				0,
				d3.max(data, (d) => {
					return d.count + 100;
				}),
			])
			.range([h, 0]);

		var yAxis = d3.svg.axis().scale(y).orient('left').ticks(5);

		var xAxis = d3.svg
			.axis()
			.scale(x)
			.orient('bottom')
			.tickValues(
				data
					.map((d, i) => {
						if (i > 0) {
							return d.date;
						}
					})
					.splice(1),
			)
			.ticks(4);

		var yGrid = d3.svg.axis().scale(y).orient('left').ticks(5).tickSize(-w, 0, 0).tickFormat('');

		var line = d3.svg
			.line()
			.x((d) => {
				return x(d.date);
			})
			.y((d) => {
				return y(d.count);
			})
			.interpolate('cardinal');

		var transform = 'translate(' + margin.left + ',' + margin.top + ')';

		return (
			<div>
				<svg
					// eslint-disable-next-line max-lines
					id={this.props.chartId}
					width={this.state.width}
					height={this.props.height}
				>
					<g transform={transform}>
						<Grid
							h={h}
							grid={yGrid}
							gridType='y'
						/>
						{/*<Grid h={h} grid={xGrid} gridType="x"/> */}

						<Axis
							h={h}
							axis={yAxis}
							axisType='y'
						/>
						<Axis
							h={h}
							axis={xAxis}
							axisType='x'
						/>

						<path
							className='line shadow'
							d={line(data)}
							strokeLinecap='round'
						/>

						<Dots
							data={data}
							x={x}
							y={y}
							showToolTip={this.showToolTip}
							hideToolTip={this.hideToolTip}
						/>

						<ToolTip tooltip={this.state.tooltip} />
					</g>
				</svg>
			</div>
		);
	},
	showToolTip: function (e) {
		e.target.setAttribute('fill', '#FFFFFF');

		this.setState({
			tooltip: {
				display: true,
				data: {
					key: e.target.getAttribute('data-key'),
					value: e.target.getAttribute('data-value'),
				},
				pos: {
					x: e.target.getAttribute('cx'),
					y: e.target.getAttribute('cy'),
				},
			},
		});
	},
	hideToolTip: function (e) {
		e.target.setAttribute('fill', '#7dc7f4');
		this.setState({ tooltip: { display: false, data: { key: '', value: '' } } });
	},
});

window.LineChart = LineChart;

var Visitors = React.createClass({
	render: function () {
		return (
			<div>
				<h3>Monthly Volumes</h3>
				<p>Paragraf line to describe the model</p>
				<div className='bottom-right-svg'>
					<LineChart />
				</div>
			</div>
		);
	},
});
export default Visitors;
