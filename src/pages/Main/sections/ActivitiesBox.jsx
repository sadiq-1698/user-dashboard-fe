import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ResponsiveContainer
} from "recharts";

import "../styles.scss";

const CustomisedXAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={120} y={20} textAnchor="middle">
      {payload.value}
    </text>
  </g>
);

const ActivitiesBox = () => {
  const data = [
    {
      name: "Week 1",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Week 2",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Week 3",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Week 4",
      uv: 2780,
      pv: 3908,
      amt: 2000
    }
  ];
  return (
    <div className="dashboard-box activities">
      <div className="activities-box-head">
        <div className="left">
          <h3>Activities</h3>
          <div className="time-span">
            <p>May - June 2021&nbsp;</p>
            <div className="chevron-down">&gt;</div>
          </div>
        </div>

        <div className="right">
          <div className="stat">
            <div
              style={{ backgroundColor: "#E9A0A0" }}
              className="data-hightlight-color"
            ></div>
            <div>
              <p className="prod-value">Guest</p>
            </div>
          </div>

          <div className="stat">
            <div
              style={{ backgroundColor: "#9BDD7C" }}
              className="data-hightlight-color"
            ></div>
            <div>
              <p className="prod-value">User</p>
            </div>
          </div>
        </div>
      </div>

      <div className="activities-box-body">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart width={800} height={300} data={data}>
            <XAxis dataKey="name" tick={<CustomisedXAxisTick />} />

            <YAxis />

            <CartesianGrid stroke="#eee" strokeDasharray="0 0" />

            <Line
              type="monotone"
              dataKey="uv"
              stroke="#9BDD7C"
              dot={false}
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="pv"
              stroke="#E9A0A0"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivitiesBox;
