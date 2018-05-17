import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Input = React.createClass({
	render: function() {
		console.log("[Input] render id: ", this.props.id);

		return (
			<div className="Input">
				<input
					id={this.props.id}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>
				<label htmlFor={this.props.id}></label>
			</div>
		);
	}
});

var Modal = React.createClass({
	render: function() {
		console.log("[Modal] render");

		return (
			<div className="Modal">
				<form
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<Input
						id="name"
						type="text"
						ref="nameInput"
						placeholder="Jack-Edward Oliver" />
					<Input
						id="username"
						type="email"
						placeholder="mrjackolai@gmail.com" />
					<Input
						id="password"
						type="password"
						placeholder="password" />
					<button>
						Log in <i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>
		);
	}
});

var App = React.createClass({


	getInitialState: function() {
		console.log('[App] getInitialState mounted = false');
		return { mounted: false };
	},

	componentDidMount: function() {
		console.log('[App] componentDidMount mounted = true');

		this.setState({ mounted: true });
	},

	handleSubmit: function(e) {
		console.log("[App handleSubmit]");

		this.setState({ mounted: false });
		e.preventDefault();
	},

	render: function() {
		console.log("[App] render mounted: ", this.state.mounted);

		var child;

		if(this.state.mounted) {
			console.log('[App] render - this.state.mounted = true');
			console.log('[App] render - child = Modal');

			child = (<Modal onSubmit={this.handleSubmit} />);
		} else {
			console.log('[App] render - this.state.mounted = false');
		}

		return(
			<div className="App">
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

export default App;
