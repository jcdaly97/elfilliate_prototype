import React from "react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Icons: any = require("react-icons/tb");
const { TbArrowUpRight, TbArrowDownRight } = Icons;

interface MetricsCardProps {
  title: string;
  value: number | string;
  change: number;
  period: string;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  change,
  period,
  icon,
  prefix = "",
  suffix = "",
}) => {
  const isPositive = change >= 0;
  const formattedValue =
    typeof value === "number" ? value.toLocaleString() : value;

  return (
    <div className="metric-card">
      <div className="metric-header">
        <h2>{title}</h2>
        {icon}
      </div>
      <div className="metric-value">
        {prefix}
        {formattedValue}
        {suffix}
      </div>
      <div className={`metric-change ${isPositive ? "positive" : ""}`}>
        {isPositive ? <TbArrowUpRight /> : <TbArrowDownRight />}
        {`${isPositive ? "+" : "-"}${Math.abs(change)}%`}
        <span className="period">from {period}</span>
      </div>
    </div>
  );
};

export default MetricsCard;
