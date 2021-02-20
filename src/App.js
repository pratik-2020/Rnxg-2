import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './Component/Rmegedon';
import HomeComponent from './Component/HomeComponent';
import Album from './Component/OurTeam';
import Album1 from './Component/HomeComponent';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Album2 from './Component/Common/ProjectComponent';
import { Zoom } from 'react-reveal';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
function App() {
  var theme = createMuiTheme()
  responsiveFontSizes(theme)
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <div className="App">
        <Switch>
          <Route path="/home" component={() => <Album1 />} />
          <Route path="/our-teams" component={() => <Album />} />
          <Route path="/rmegeddon" component={() => <Pricing />} />
          <Route path="/alumni" component={() => <Album1 />} />
          <Route path="/projects" component={() => <Album2 />} />
          <Redirect to="/home" />
        </Switch>
    </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
