import { useRef, useState } from "react";
import { LuckyWheel, LuckyGrid, SlotMachine } from "@lucky-canvas/react";
import { Foods } from "../../const/Foods";

const EatWhat = () => {
  // const [blocks] = useState([{ padding: "10px", background: "#869cfa" }]);
  // const [prizes] = useState([
  //   { background: "#e9e8fe", fonts: [{ text: "0" }], range: 80 },
  //   { background: "#b8c5f2", fonts: [{ text: "1" }], range: 4 },
  //   { background: "#e9e8fe", fonts: [{ text: "2" }], range: 4 },
  //   { background: "#b8c5f2", fonts: [{ text: "3" }], range: 4 },
  //   { background: "#e9e8fe", fonts: [{ text: "4" }], range: 4 },
  //   { background: "#b8c5f2", fonts: [{ text: "5" }], range: 4 },
  // ]);
  // const [buttons] = useState([
  //   { radius: "40%", background: "#617df2" },
  //   { radius: "35%", background: "#afc8ff" },
  //   {
  //     radius: "30%",
  //     background: "#869cfa",
  //     pointer: true,
  //     fonts: [{ text: "开始", top: "-10px" }],
  //   },
  // ]);
  // const myLucky = useRef();
  // return (
  //   <div>
  //     <LuckyWheel
  //       ref={myLucky}
  //       width="300px"
  //       height="300px"
  //       blocks={blocks}
  //       prizes={prizes}
  //       buttons={buttons}
  //       onStart={() => {
  //         // 点击抽奖按钮会触发star回调
  //         myLucky.current.play();
  //         setTimeout(() => {
  //           const index = (Math.random() * 6) >> 0;
  //           console.log("end", index);
  //           myLucky.current.stop();
  //         }, 2500);
  //       }}
  //       onEnd={(prize) => {
  //         // 抽奖结束会触发end回调
  //         alert("恭喜你抽到 " + prize.fonts[0].text + " 号奖品");
  //       }}
  //     />
  //   </div>
  // );

  const foods = Foods;
  const [currentFood, setCurrentFood] = useState("");
  const [isStart, setIsStart] = useState(false);
  const foodRef = useRef(null);

  const getRandomName = () => {
    const name_index = parseInt(String(Math.random() * foods.length));
    return foods[name_index];
  };

  const onStart = (e) => {
    e.preventDefault();
    setIsStart(true);
    foodRef.current = setInterval(() => {
      setCurrentFood(getRandomName());
    });
  };

  const onStop = (e) => {
    e.preventDefault();
    setIsStart(false);
    clearInterval(foodRef.current);
  };

  return (
    <>
      <div>当前的值为：{currentFood}</div>
      {isStart ? (
        <button onClick={onStop}>停止</button>
      ) : (
        <button onClick={onStart}>开始</button>
      )}
    </>
  );
};

export default EatWhat;
