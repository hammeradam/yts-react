import styled from 'styled-components';
import { CardList } from './components/card-list/CardList';
import { Favorites } from './components/favorites/Favorites';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink as NavLinkBase
} from 'react-router-dom';

const Header = styled.header`
    height: 60px;
    width: 100vw;
    background-color: ${({ theme }) => theme.backgroundColor};
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

const NavLink = styled(NavLinkBase)`
    font-size: 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
`;

function App() {
    return (
        <BrowserRouter>
            <Header>
                <NavLink to="/yts-react">Home</NavLink>
                <NavLink to="/yts-react/favorites">Favorites</NavLink>
            </Header>
            <Switch>
                <Route path="/yts-react/favorites">
                    <Favorites />
                </Route>
                <Route path="/yts-react">
                    <CardList />
                </Route>
                <Route path="/">
                    <CardList />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
