import React from "react";
import MetricsCard from "../components/dashboard/MetricsCard";
import SalesChart from "../components/dashboard/SalesChart";
import PageViewsChart from "../components/dashboard/PageViewsChart";
import metricsData from "../data/metrics.json";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Icons: any = require("react-icons/tb");
const { TbCurrencyDollar, TbEye, TbShoppingCart, TbArrowsExchange } = Icons;

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-content">
      <div className="metrics-row">
        <MetricsCard
          title="Total Earnings"
          value={metricsData.totalEarnings.value}
          change={metricsData.totalEarnings.change}
          period={metricsData.totalEarnings.period}
          icon={<TbCurrencyDollar className="metric-icon" />}
          prefix="$"
        />
        <MetricsCard
          title="Page Views"
          value={metricsData.pageViews.value}
          change={metricsData.pageViews.change}
          period={metricsData.pageViews.period}
          icon={<TbEye className="metric-icon" />}
        />
        <MetricsCard
          title="Products Sold"
          value={metricsData.productsSold.value}
          change={metricsData.productsSold.change}
          period={metricsData.productsSold.period}
          icon={<TbShoppingCart className="metric-icon" />}
        />
        <MetricsCard
          title="Conversion Rate"
          value={metricsData.conversionRate.value}
          change={metricsData.conversionRate.change}
          period={metricsData.conversionRate.period}
          icon={<TbArrowsExchange className="metric-icon" />}
          suffix="%"
        />
      </div>

      <div className="charts-row">
        <div className="chart-card">
          <div className="chart-header">
            <h2>Sales Performance</h2>
            <p>Monthly sales and commission earnings</p>
          </div>
          <div className="chart-container">
            <SalesChart
              title="Sales Performance"
              subtitle="Monthly sales and commission earnings"
              data={metricsData.salesPerformance.data}
            />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <h2>Page Views</h2>
            <p>Page views per month</p>
          </div>
          <div className="chart-container">
            <PageViewsChart
              title="Page Views"
              subtitle="Page views per month"
              data={metricsData.pageViewsChart.data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
