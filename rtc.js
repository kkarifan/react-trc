const React = require('react');
const cl = require('classnames');
const propTypes = require('prop-types');


class MainRtc extends React.Component {
	constructor(props) {
		const {container} = props;
		super(props)
		this.state = {
			is : false,
			end : false
		}
		this.container = container;
	}

	componentDidMount() {
		let timer = Number(this.props.timerSwitch)
		if (isNaN(timer) || timer < 5) timer = 5;

		setTimeout(()=>this.setState({is:true}),timer);
	}


	componentWillReceiveProps(np) {
		if (this.state.is && this.state.end != np.isEnd) {
			this.setState({end:np.isEnd})
		}
	} 

	getProps() {
		let {className, classStart, classMain, classEnd, container, timerSwitch, isEnd, ...props} = this.props;
		let { end } = this.state;
		
		classStart = classStart || 'start';
		classMain = classMain || 'main';
		classEnd = classEnd || 'end';
		className = className || '';

		props.className = cl(className,{
			[classStart] : !end && !this.state.is,
			[classMain] : !end && this.state.is,
			[classEnd] : !!end
		})
		console.log(props.className)
		return props
	}

	render() {
		return React.createElement(this.container,this.getProps(),this.props.children)
	}
}

MainRtc.defaultProps = {
	timerSwitch : 123,
	className : '_',
	classStart : 'start',
	classMain : 'main',
	classEnd : 'end',
	isEnd : false,
	container : 'div'
}

MainRtc.propTypes = {
	className : propTypes.string,
	classStart : propTypes.string,
	classMein : propTypes.string,
	classEnd : propTypes.string,
	isEnd : propTypes.bool,
	timerSwitch : propTypes.number
}


module.exports = MainRtc