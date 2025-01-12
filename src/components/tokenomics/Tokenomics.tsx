import './tokenomics.css'
export const Tokenomics = () => {
  return (
  <section className="tokenomics">
    <p className="title-tokenomics">$ $ $  TOKENOMICS  $ $ $</p>
    <div className='container-info-tokenomics'>
        <div className='div-info-tokenomics'>
            <p className='p-suply'>1,000 million token</p>
            <p className='p-circulation'>100% circulation</p>
            <p className='p-fee'>0% buy/sell tax on DEX</p>
        </div>
        <div className='img-container'>
            <img src="/trump-coin.png" alt="" />
        </div>
    </div>
  </section>
  )
}
