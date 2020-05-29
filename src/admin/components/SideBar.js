import React from "react"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Images from "./Images"
import Policy from "./Policy"
import "../Admin.css"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SideBar extends React.Component {
  

  render() {
    return (
      <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/admin/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Ana Sayfa
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="images">
                        <NavIcon>
                            <i className="far fa-images" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Resimler
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="policy">
                        <NavIcon>
                            <i className="far fa-sticky-note" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Politikalar
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="#" onClick={()=> this.props.onLogout()}>
                        <NavIcon>
                            <i className="fas fa-power-off" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Çıkış Yap
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/admin/images" component={props => <Images />} />
                <Route path="/admin/policy" component={props => <Policy />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
    );
  }
}

export default SideBar;