import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainNavigation from "./components/Navigation/MainNavigation";
import NavigationList from "./components/Navigation/NavigationList";
import DateCounter from "./pages/DateCounter/DateCounter";
import About from "./pages/About";
import Stats from "./pages/Stats";
import "./App.css";

function App() {
    return (
        <div className="font-balsamiq bg-gray-800 w-screen h-screen flex flex-col">
            <BrowserRouter>
                <header className="linear-background">
                    <MainNavigation />
                </header>
                <main className="flex-1 overflow-y-auto">
                    <Switch>
                        <Route path="/" component={DateCounter} exact />
                        <Route path="/customdate" component={DateCounter} />
                        <Route path="/stats" component={Stats} />
                        <Route path="/fad" component={null} />
                        <Route path="/about" component={About} />
                    </Switch>
                </main>
                <footer className="bg-gray-900 bg-opacity-25 border-t-2 border-gray-700 lg:hidden">
                    <NavigationList />
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
