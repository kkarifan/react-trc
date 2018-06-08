const Rtc = require('./rtc');

//ф
class DivRtc extends Rtc {
	constructor(props) {
		super(props);

		this.container = 'div';
	}
}


class SpanRtc extends Rtc {
	constructor(props) {
		super(props);

		this.container = 'span';
	}
}


class ARtc extends Rtc {
	constructor(props) {
		super(props);

		this.container = 'a';
	}
}


class SectionRtc extends Rtc {
	constructor(props) {
		super(props);

		this.container = 'section';
	}
}

exports.Div = DivRtc
exports.Span = SpanRtc
exports.A = ARtc
exports.Section = SectionRtc