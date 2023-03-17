import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useDivergentStore, useDivergentClient, DivergentClientProvider, getDivergentClient } from "@huddle01/divergent-client";

export default function Home() {

  const { address, isConnected } = useAccount()

  const user = useDivergentStore(state => state.user);
  console.log(user)


  const client = useDivergentClient()

  const login = async () => {
    await client.init("wallet")
  }
  login()

  return (
    <div className={styles.container}>
      <Head>
        <title>Huddle Divergent test</title>
        <meta name="description" content="test huddle01 divergent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectButton />
      {isConnected ? (
        <p>Connected with the address: {address}</p>
      ) : (
        <p></p>
      )}
      <h1> Logged in User: {user.uid} </h1>
    </div>
  )
}
