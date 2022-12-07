import React, { useState } from "react";
import { Button, TimePicker, DatePicker } from "antd";
import "dayjs/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";

import { Content, SubTitle, Title, Wrapper } from "./ComputeDate.style";

const { RangePicker } = DatePicker;

const ComputeDate = () => {
  const [dateResult, setDateResult] = useState();
  const [dateDecimalsResult, setDateDecimalsResult] = useState();

  const [timeResult, setTimeResult] = useState();
  const [timeDecimalsResult, setTimeDecimalsResult] = useState();

  const onChangeDateTime = (value, dateString) => {
    const { time, decimal } = onCompute(value, dateString);
    setDateResult(time);
    setDateDecimalsResult(decimal);
  };

  const onChangeTime = (value, dateString) => {
    const dateRange = dateString.map((item) => {
      return `2022-04-20 ${item}`;
    });
    const { time, decimal } = onCompute(value, dateRange);
    setTimeResult(time);
    setTimeDecimalsResult(decimal);
  };

  const onCompute = (value, dateRange) => {
    if (dateRange.every((item) => !item)) {
      return { time: "", decimal: "" };
    }

    const startDateTime = new Date(dateRange[0]).getTime();
    const endDateTime = new Date(dateRange[1]).getTime();

    const diff = (endDateTime - startDateTime) / 1000;
    const day = Math.floor(diff / (24 * 3600));
    const leave = diff % (24 * 3600);
    const hours = Math.floor(leave / 3600);
    const leave2 = leave % 3600;
    const minutes = Math.floor(leave2 / 60);

    const time = day + "天" + hours + "时" + minutes + "分";
    const decimal = day * 24 + hours + Math.round((minutes / 60) * 10) / 10;

    return { time, decimal };
  };

  return (
    <Wrapper>
      <Title>日期计算器</Title>
      <Content>
        <SubTitle>跨天</SubTitle>
        <div>
          <RangePicker
            locale={locale}
            showTime={{ format: "HH:mm" }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChangeDateTime}
            size="large"
          />
        </div>
        <div>时间差：{dateResult}</div>
        <div>时间差小数值：{dateDecimalsResult}</div>
      </Content>

      <Content style={{ marginTop: 64 }}>
        <SubTitle>当天</SubTitle>
        <div>
          <TimePicker.RangePicker
            locale={locale}
            format="HH:mm"
            onChange={onChangeTime}
            size="large"
          />
        </div>
        <div>时间差：{timeResult}</div>
        <div>时间差小数值：{timeDecimalsResult}</div>
      </Content>
    </Wrapper>
  );
};

export default ComputeDate;
