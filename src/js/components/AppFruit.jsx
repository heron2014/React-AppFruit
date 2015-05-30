var React = require("react"),
	Header = require("./Header.jsx"),
	List = require("./List.jsx"),
	Footer = require("./Footer.jsx");


var AppFruit = React.createClass({
	getInitialState: function () {
		return {
			headerText: "",
			arrayOfFruit: [{name: "Chicken",number: 6},{name: "Apples",number: 2},{name: "Oranges", number: 4},{name: "Peaches", number: 1}]
		};
	},
	changeText: function (text) {
		return this.setState({headerText: text});
	},
	render: function (){
		return(
			<div className = "app-wrapper">
				<Header />
				
				
			</div>
		);
	}
});

module.exports = AppFruit;