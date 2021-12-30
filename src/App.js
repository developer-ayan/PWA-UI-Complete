import { Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import { Provider } from "react-redux";
import DOB from "./screens/DOBScreen";
import store from "./store/reducers";
import HomeScreen from "./screens/HomeScreen";
import TodoScreen from "./screens/TodoScreen";
import Blogs from './screens/Blogs'


function App() {

  return (
    <div>
      <Provider store={store}>



        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/dob" element={<DOB />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/todos" element={<TodoScreen />} />
          <Route path="/blogs" element={<Blogs />} />




        </Routes>

      </Provider>




    </div>

  );

}

export default App;
