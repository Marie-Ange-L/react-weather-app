import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="header">
					<div className="row">
						<div className="col-xs-9 col-md-4">
							<img src="img/logo.svg" alt="" />
						</div>
						<div className="col-xs-9 col-md-8">
							<h1>Welcome to my weather&nbsp;app!</h1>
						</div>
					</div>
				</div>
				<Weather />
				<div className="change-city">
					<h3>You don't live in Toulouse?</h3>
					<p>🤷‍♀️ Too bad!</p>
					<p>Just kidding. You can search your city right here:</p>
					<form>
						<div className="row">
							<div className="col-6">
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										aria-describedby="emailHelp"
										placeholder="Type your location"
										autoComplete="off"
										required
										onfocus="this.value=''"
									/>
								</div>
							</div>
							<div className="col-6">
								<button type="submit" className="btn btn-primary mb-2">
									<i className="fas fa-air-freshener"></i>&nbsp;Refresh
								</button>
							</div>
						</div>
					</form>
					<p>Or let us know where you are:</p>
					<button className="btn btn-primary mb-2 find-me-button">
						<i className="fab fa-earlybirds icons"></i>&nbsp;Find me
					</button>
				</div>
				<div className="footer">
					<p>
						💻 Coded by Marie-Ange Lhernould
						<br />
						<a
							href="https://github.com/Marie-Ange-L/react-weather-app"
							target="_blank"
							rel="noreferrer"
							title="My GitHub repository"
						>
							GitHub repository
						</a>
						•
						<a
							href="https://www.linkedin.com/in/marie-ange-lhernould/"
							target="_blank"
							rel="noreferrer"
							title="My LinkedIn profile"
						>
							LinkedIn profile
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
