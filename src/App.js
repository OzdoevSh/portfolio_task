import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<AboutPage />}></Route>
          <Route path='/portfolio' element={<PortfolioPage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
