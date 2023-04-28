
export const CardWallet = ({ porcentaje, title}) => {

  return (
    <div className="card">
      <div>
        { title }
      </div>
      <div className="degradado-texto">
        APY = { porcentaje }
      </div>
      <div>
        <input className="input-cash" type="text" name="input"/>
      </div>
      <div>
        <button type="submit" className="btn degradado">Deposit</button>
      </div>
      
    </div>
  )
}
