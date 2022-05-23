import React from "react"
import { connect } from "react-redux"
import { SetFact } from "../actions/data.action"

const Home = (props: any) => {
	const GetNewFact = () => {
		props.SetFact()
	}

	let updateTime = "N/A"
	if (props.update_time) {
		const startTime = new Date(props.update_time)
		const endTime = new Date()
		const difference = endTime.getTime() - startTime.getTime()
		updateTime = Math.round(difference / 60000).toString()
	}

	return (
		<div className="container-fluid">
			<div className="row morfo-logo-container">
				<div className="col-md-12 morfo-logo-bg"></div>
				<div className="morfo-logo-holder">
					<div>
						React Morfo
						<h4 className="py-4">
							{props?.fact ? props.fact : "No fact !"}
						</h4>
						<h5 className="py-3" style={{ color: "#FFF" }}>
							{
								"Updated "+ updateTime + " Minutes ago"
							}
						</h5>
						<button
							className="btn btn-success d-block m-auto border border-light"
							onClick={GetNewFact}
						>
							Get a fact!
						</button>
					</div>
				</div>
				<p>
					Welcome to React Morfo. React Morfo project is a basic
					skeleton for ReactJS application. You can visit{" "}
					<a
						href="https://github.com/kadirkoca/react-morfo"
						target="_blank"
					>
						Github Repository
					</a>{" "}
					for more..
				</p>
			</div>
		</div>
	)
}

const mapStateToProps = (state: any) => {
	const { fact, update_time } = state.content || {}

	return {
		fact,
		update_time,
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	SetFact: () => dispatch(SetFact()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
