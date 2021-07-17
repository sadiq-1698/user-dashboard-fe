import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

import useComponentVisible from "../../../hooks/useComponentVisible.js";

import PieChartData from "../../../data/pie-chart.json";

const TopProductsBox = () => {
  const pieChartData = PieChartData;
  const [currentData, setCurrentData] = useState(pieChartData[0].products);
  const [currentduration, setDuration] = useState(pieChartData[0].duration);

  const {
    triggerRef,
    childRef,
    isComponentVisible,
    toggleChild
  } = useComponentVisible();

  return (
    <div className="dashboard-box top-products">
      <div className="top-products-box-head">
        <h3>Top Products</h3>

        <div className="right">
          <a
            className="current-duration"
            ref={triggerRef}
            href="/"
            onClick={e => {
              e.preventDefault();
              toggleChild();
            }}
          >
            <p>{currentduration}&nbsp;</p>
            <p>&nbsp;v</p>
          </a>

          {isComponentVisible && (
            <div className="duration-dropdown" ref={childRef}>
              {pieChartData.map(({ duration, products }) => {
                return (
                  <a
                    href="/"
                    onClick={e => {
                      e.preventDefault();
                      setCurrentData(products);
                      setDuration(duration);
                      toggleChild();
                    }}
                  >
                    {duration}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="top-products-box-body">
        <div className="pie-chart">
          <PieChart width={145} height={145}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={currentData}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
            >
              {currentData.map(({ color }, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="pie-stats">
          {currentData.map(({ name, value, color }, i) => {
            return (
              <div className="stat" key={name}>
                <div
                  style={{ backgroundColor: color }}
                  className="data-hightlight-color"
                ></div>
                <div>
                  <h5 className="prod-name">{name}</h5>
                  <p className="prod-value">{value}%</p>
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
