import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="user-detail">
          <p className="name-symbol">S</p>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance">Your Balance</p>
          <p className="amount">{balance}</p>
        </div>
        <p className="rs">In Rupees</p>
        <p className="withdraw-heading">Withdraw</p>
        <p className="btn-para">CHOOSE SUM (IN RUPEES)</p>
        <ul className="btn-list">
          {denominationsList.map(eachList => (
            <DenominationItem
              key={eachList.id}
              denomination={eachList}
              onWithdraw={this.onWithdraw}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
