import { useEffect, useRef } from "react";
import { arc, select, timer } from "d3";
import { palette } from "@/styles/palette";

type TimerProps = {
  totalTime: number;
  isDarkMode: boolean;
  timeOver: () => void;
};

const Timer = ({ totalTime, isDarkMode, timeOver }: TimerProps) => {
  const svgRef = useRef(null);
  const currentTimer = totalTime;

  useEffect(() => {
    if (svgRef.current && currentTimer) {
      const fontColor = isDarkMode ? palette.DARK_WHITE : palette.BLACK;
      const svg = select(svgRef.current).attr("width", 141).attr("height", 141);
      const group = svg.append("g").attr("transform", "translate(70, 70)");

      const arcSvg = arc().innerRadius(64).outerRadius(70).startAngle(0);

      const path = group.append("path").attr("fill", palette.TERTIARY);

      const text = group
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("style", "font-family: Pretendard")
        .style("fill", fontColor)
        .style("font-weight", "600")
        .style("font-size", "32px");

      const update = (elapsed: number) => {
        if (elapsed >= currentTimer) {
          timerObj.stop();
          path.attr("visibility", "hidden");
          text.text("00:00");
          timeOver();
          return;
        }

        const remainingTime = currentTimer - elapsed;
        const minutes = Math.floor(remainingTime / 60000); // milliseconds to minutes
        const seconds = Math.floor((remainingTime % 60000) / 1000); // remainder to seconds

        // 시간 형식을 00:00 으로 변환
        const displayTime = `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
        text.text(displayTime);

        const angle = (elapsed / totalTime) * 2 * Math.PI;
        arcSvg.startAngle(angle).endAngle(2 * Math.PI);
        path.attr(
          "d",
          arcSvg({
            startAngle: angle,
            endAngle: 2 * Math.PI,
            innerRadius: 0,
            outerRadius: 100,
          }),
        );
      };

      const timerObj = timer(update);

      return () => {
        timerObj.stop();
        select(svgRef.current).selectAll("*").remove(); // SVG 내부의 모든 요소 제거
      };
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
      }}
    >
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Timer;
