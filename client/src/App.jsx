import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <AppBar position="static" color="primary" className="py-3">
        <Typography variant="h3" align="center">
          Video Application
        </Typography>
      </AppBar>
      {/* <h1 className="text-3xl text-center m-4">Video Application</h1> */}
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </>
  );
}

export default App;
