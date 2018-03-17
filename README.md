# react-rtc
simple react-transition for change classNames
***


## installation:
```
npm install react-rtc
```

### import:

`es5:`
```js
var ReactRtc = require('react-rtc');
```
`es6:`
```js
import ReactRtc from 'react-rtc';
```
***

### simple example:

```js
const React = require('react')
const Rtc = require('react-rtc')

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      end : false
    }
  }
  
  componentDidMount() {
    setTimeout(()=>this.setState({end:true}),2000)
  }
  
  render() {
    return (
      <Rtc className="test"> Lorem </Rtc>
    )
  }
```
***result:***
> first render: 
```html
<div class="test start"> Lorem </div>
```

> after 5ms: ```className="test main"```

> after 2000ms: ```className="test end"```
***

### props:

propName|type|default|description
:---|:--:|:--:|---:
container|string<br/>react-class|div|the type of item (html tag or react-class) that wraps the nested content
className|string||there are always
classStart|string|start|present in ___className___ immediately after the component is mounted
classMain|string|main|replaces ___classStart___ with ___className___ after the time specified in ***timeSwitch***
classEnd|string|end|replaces ___classMain___ with ___className___ when ___isEnd___=***true***
timerSwitch|number|5|delay before switching from ___start___ to ___main___
isEnd|boolean|false|status switch ___main___ in ___end___


> the remaining ___props___ are transferred to the container unchanged

> you cannot change the state from ___main___ to ___start___

> you cannot change the state to ___end___ until it is moved to ___main___

***

### containers

**you can use arbitrary html tags in the following way:**
> to use the built-in examples
```js
const { Div, Span, A, Section} = require('react-rtc')
```

> or create your own

```js
<Rtc container="header" />
```

> or:

```js
class Header extends Rtc {
  constructor(props) {
    super(props)
    this.container = 'header'
  }
}
```