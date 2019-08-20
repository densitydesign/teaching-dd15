import React, {Component} from 'react';
import rd3 from 'react-d3-library';

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const path = d3.path()

    const x0 = 200,
    y0 = 200;
    var x = x0,
    y = y0;

    path.moveTo(x, y)

    for (var i = 0; i < 50; i++) {
      x += 60 * (Math.random() - 0.5);
      y += 60 * (Math.random() - 0.5);

      if (i % 2 && walkOptions.indexOf("moveTo") > -1) path.moveTo(x, y)
      else path.lineTo(x, y)

      let svg`<svg width=400 height=400>
      <circle fill="orange" cx="${x0}" cy="${y0}" r="3" />
      <path stroke="orange" fill="none" d="${path}" />
      </svg>`
    }
  }
}

export default BarChart;
