import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isClicked: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
    console.log('clicked')
  }

  getButtonText = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        <button type="button" className="btn" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
