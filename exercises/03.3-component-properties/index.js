import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageURL} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageURL: PropType.string,
	description: PropType.string,
	buttonURL: PropType.string,
	buttonLabel: PropType.string

	// 2) add here the new properties into the proptypes object
};

// change the syntaxt of the first parameter to make it <PrintHello /> instead of PrintHello()
ReactDOM.render(
	<BootstrapCard
		title="Bob Dylan"
		imageURL="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
		buttonLabel="Go to wikipedia"
		buttonURL="https://en.wikipedia.org/wiki/Bob_Dylan"
	/>,
	document.querySelector("#myDiv")
);
// 3) Use ReactDOM to add the component into then DOM element #myDiv
