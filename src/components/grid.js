import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyTable({ members = [] }) {
	var membersList = members.map(function (member) {
		return (
			<tr key={member.phone}>
				<td>
					<Container>
						<Col>
							<Row>
								<Container>
									<Row>
										<Col sm={6}>
											<span style={{ fontWeight: "bold" }}>Name:</span>
										</Col>
										<Col>{member.fullName}</Col>
									</Row>
								</Container>
							</Row>
							<Row>
								<Container>
									<Row>
										<Col sm={6}>
											<span style={{ fontWeight: "bold" }}>Company:</span>
										</Col>
										<Col>{member.company}</Col>
									</Row>
								</Container>
							</Row>
							<Row>
								<Container>
									<Row>
										<Col sm={6}>
											<span style={{ fontWeight: "bold" }}>Title:</span>
										</Col>
										<Col>{member.title}</Col>
									</Row>
								</Container>
							</Row>
							<Row>
								<Container>
									<Row>
										<Col sm={6}>
											<span style={{ fontWeight: "bold" }}>Department:</span>
										</Col>
										<Col>{member.department}</Col>
									</Row>
								</Container>
							</Row>
						</Col>
					</Container>
				</td>
				<td>
					<Container>
						<Col sm={10}>
							<Row>
								<Container>
									<Row>
										<Col sm={4}>
											<span style={{ fontWeight: "bold" }}>Phone:</span>
										</Col>
										<Col>{member.phone}</Col>
									</Row>
								</Container>
							</Row>
							<Row>
								<Container>
									<Row>
										<Col sm={4}>
											<span style={{ fontWeight: "bold" }}>Address:</span>
										</Col>
										<Col>{member.fullAddress}</Col>
									</Row>
								</Container>
							</Row>
							<Row>
								<Container>
									<Row>
										<Col sm={4}>
											<span style={{ fontWeight: "bold" }}>Website:</span>
										</Col>
										<Col>{member.url}</Col>
									</Row>
								</Container>
							</Row>
						</Col>
					</Container>
				</td>
				<td style={{ width: "15%" }}>
					<img src={member.image} width="100" height="100" />
				</td>
			</tr>
		);
	});
	return (
		<div>
			<Table striped responsive>
				<tbody>{membersList}</tbody>
			</Table>
		</div>
	);
}

export default MyTable;
