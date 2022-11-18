import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTERS } from "@constants/router";
import Home from "@pages/Home";
import ErrorPage from "@pages/ErrorPage";

const App: FC<Record<string, unknown>> = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTERS.HOME} element={<Home />} />
          <Route path={ROUTERS.ERROR} element={<ErrorPage />} />
          {/* <Route path="/*" element={<Navigate to={ROUTERS.ERROR} />} /> */}
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
