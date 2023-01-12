import axios from "axios";
import React from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";
import logo from "./logo.png";

import MyTable from "./components/grid";

const baseURL = "http://localhost:3000/members";

function App() {
	const [members, setMembers] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [query, setquery] = React.useState("");

	const getData = async () =>
		await axios.get(baseURL).then((response) => {
			setMembers(JSON.parse(response.data.result));
		});

	React.useEffect(() => {
		getData();
		setLoading(false);
	}, []);

	const handleSearch = (event) => {
		setquery(event.target.value);
	};
	const filteredMembers = members.filter((member) =>
		member.fullName.toLowerCase().includes(query)
	);
	return (
		<div id="members">
			<div className="container-fluid bg-light text-dark p-5">
				<div className="container bg-light p-5">
					<h1 className="display-4 fw-bold">Welcome to Aaron's assessment</h1>
					<p>We filter members</p>
					<img src={logo} />
				</div>
			</div>
			<Stack gap={3} className="col-lg-12 mx-auto">
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Search by Name"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						id="search"
						onChange={handleSearch}
						value={query}
					/>
				</InputGroup>
				<div id="membersTable" className="bg-light border">
					{loading ? (
						<div>Loading Table Data...</div>
					) : (
						<MyTable members={query === "" ? members : filteredMembers} />
					)}
				</div>
			</Stack>
		</div>
	);
}

export default App;
