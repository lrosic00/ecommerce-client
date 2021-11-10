import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	console.log(user);
	return (
		<Router>
			<ScrollToTop>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/products/:category">
						<ProductList />
					</Route>
					<Route path="/product/:id">
						<Product />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/success">
						<Success />
					</Route>
					<Route path="/login">
						{user ? <Redirect to="/" /> : <Login />}
						{/* <Login /> */}
					</Route>
					<Route path="/register">
						{user ? <Redirect to="/" /> : <Register />}
						{/* <Register /> */}
					</Route>
				</Switch>
			</ScrollToTop>
		</Router>
	);
};

export default App;
