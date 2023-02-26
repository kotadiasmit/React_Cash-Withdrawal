import './index.css'

const DenominationItem = props => {
  const {denomination, onWithdraw} = props
  const {value} = denomination
  const sendValue = () => {
    console.log(value)
    onWithdraw(value)
  }

  return (
    <li className="list">
      <button className="btn" type="button" onClick={sendValue}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
