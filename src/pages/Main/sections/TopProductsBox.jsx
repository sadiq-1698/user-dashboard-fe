import { PieChart, Pie, Cell } from "recharts";

const TopProductsBox = () => {
  const data = [
    { name: "Basic Tees", value: 55 },
    { name: "Custom Short Pants", value: 31 },
    { name: "Super Hoodies", value: 14 }
  ];

  const COLORS = ["#F6DC7D", "#EE8484", "#98D89E"];

  return (
    <div className="dashboard-box top-products">
      <div className="top-products-box-head">
        <h3>Top Products</h3>
        <div className="right">
          <p>May - June 2021&nbsp;</p>
          <div className="chevron-down">&gt;</div>
        </div>
      </div>

      <div className="top-products-box-body">
        <div className="pie-chart">
          <PieChart width={145} height={145}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="pie-stats">
          {data.map((val, i) => {
            return (
              <div className="stat">
                <div
                  style={{ backgroundColor: COLORS[i] }}
                  className="data-hightlight-color"
                ></div>
                <div>
                  <h5 className="prod-name">{val.name}</h5>
                  <p className="prod-value">{val.value}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopProductsBox;
