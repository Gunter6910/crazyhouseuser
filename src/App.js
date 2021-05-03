import React from "react";
import Home from "./pages/Home";
import Login from "../src/pages/Login";
import RoomBig from "../src/pages/typeroom/RoomBig";
import RoomSmall from "../src/pages/typeroom/RoomSmall";
import DartRoom from "../src/pages/typeroom/DartRoom";
import BoxingRoom from "../src/pages/typeroom/BoxingRoom";
import BookingRoom from "../src/pages/BookingRoom";
import GameRoom from "../src/pages/typeroom/GameRoom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Find from "../src/components/Find";
import LienHe from "../src/pages/LienHe";
import LichSu from "../src/components/LichSuDat";
import EditPass from "../src/pages/EditPass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* DashBoard */}
          <Route exact path="/" component={Home} />
          {/* Login */}
          <Route path="/login" component={Login} />
          {/* Page Type Room */}
          <Route path="/roombig" component={RoomBig} />
          <Route path="/roomsmall" component={RoomSmall} />
          <Route path="/DartRoom" component={DartRoom} />
          <Route path="/BoxingRoom" component={BoxingRoom} />
          <Route path="/GameRoom" component={GameRoom} />

          <Route path="/lienhe" component={LienHe} />
          <Route path="/find" component={Find} />
          <Route path="/bookingroom" component={BookingRoom} />
          <Route path="/lichsu" component={LichSu} />
          <Route path="/changepass" component={EditPass} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
