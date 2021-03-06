import type { NextPage } from 'next'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3()

  useEffect(() => {
    if(!address) return

    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc);
    })()
  }, [address])
  

  return (
    <div className={style.wrapper}>
      {address ? (
          <>
          <Header />
          <Hero />
          </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
            >Connect Wallet</button>
            <div className={style.details}>
              You need metamask or other web3 wallet to connect to the app
            </div>
        </div>
      )}
    </div>
    )
}

export default Home
