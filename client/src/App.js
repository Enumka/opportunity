import {
  Routes,
  Route,
} from "react-router-dom";
import Crm from "./components/pages/CrmPage";
import { Header } from "./components/Header/Header";
import InfoProject from "./components/pages/InfoProjectPage";
import Login from "./components/pages/LoginPage";
import Main from "./components/pages/MainPage";
import Register from "./components/pages/RegisterPage";
import StartApPage from "./components/pages/StartApPage";
import StartApPosts from "./components/pages/StartApPostsPage";
import UserProfile from "./components/pages/UserProfilePage";
import Workers from "./components/pages/WorkersPage";
import WorkerProfilePage from "./components/pages/WorkerProfilePage";
import { ProtectedAuth } from "./components/ProtectedAuth/ProtectedAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/crm" element={<Crm />} />
        <Route path="/infoproject" element={<InfoProject />} />
        <Route path="/startappage" element={<StartApPage />} />
        <Route path="/startapposts" element={<StartApPosts />} />
        <Route path="/workerprofilepage" element={<WorkerProfilePage />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>

  );
}

export default App;

