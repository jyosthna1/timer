// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {isTimerStatus: false, timerInSec: 0, timerInMin: 25}

class DigitalTimer extends Component {
  state = initialState

  onChangeStartPause = () => {
    this.setState(prevState => ({isTimerStatus: prevState.isTimerStatus}))
  }

  renderTimerController = () => {
    const {isTimerStatus} = this.state
    const imageUrl = isTimerStatus
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altName = isTimerStatus ? 'pause icon' : 'play icon'
    const status = isTimerStatus ? 'Start' : 'Pause'

    return (
      <div className="start-pause-container">
        <button
          className="start-button"
          type="button"
          onClick={this.onChangeStartPause}
        >
          <img src={imageUrl} alt={altName} className="start-image" />
        </button>
        <p className="start">{status}</p>
      </div>
    )
  }

  getElapsedTime = () => {
    const {timerInSec, timerInMin} = this.state
    const remainingInSec = timerInMin * 60 - timerInSec
    const minutes = Math.floor(remainingInSec / 60)
    const seconds = Math.floor(remainingInSec % 60)
    const minutesDisplay = minutes > 9 ? minutes : `0${minutes}`
    const secondsDisplay = seconds > 9 ? seconds : `0${seconds}`

    return `${minutesDisplay}:${secondsDisplay}`
  }

  render() {
    const {isTimerStatus} = this.state
    const status = isTimerStatus ? 'Running' : 'Paused'

    return (
      <div className="timer-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="digital-timer-container">
          <div className="timer-display">
            <div className="elapsed-time">
              <h1 className="timer">{this.getElapsedTime()}</h1>
              <p className="status">{status}</p>
            </div>
          </div>
          <div className="timer-change-container">
            {this.renderTimerController()}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
