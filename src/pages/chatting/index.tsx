import { Route, Routes } from "react-router-dom";
import Chatting from "@/pages/chatting/Chatting";

const ChattingPage = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Chatting />}
      >
        {" "}
      </Route>
    </Routes>
  );
};

export default ChattingPage;
