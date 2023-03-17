import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useDivergentStore, useDivergentAVClient, DivergentAVClientProvider, getDivergentAVClient } from "@huddle01/divergent-av";
import { useEffect, useRef, useState } from 'react';


export default function Home() {

  const { address, isConnected } = useAccount() //unused 

  const client = useDivergentAVClient()
  const store = useDivergentStore();
  const [userToCall, setToId] = useState('');
  const [connectWith, connected] = useState('Connect With Huddle');

  const userRef = useRef<any>();
  const callerRef = useRef<any>();


  useEffect(() => {
    if (store.micState.stream) userRef.current.srcObject = store.micState.stream;
  }, [store.micState.stream]);
  useEffect(() => {
    if (store.callerStream) callerRef.current.srcObject = store.callerStream;
  }, [store.callerStream]);
  
  const login = async () => {
    await client.init("wallet")
    connected("Connected")
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Huddle Divergent test</title>
        <meta name="description" content="test huddle01 divergent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ConnectButton /> */}
 
      <button className='App-link' style={{width:"200px", height:"40px", fontSize:"16px", borderRadius:"20px",position:'absolute', right:0}} onClick={login}>{connectWith}</button>
      <h2> Logged in User: {store.user.uid} </h2>

      <input type='text' style={{width:"400px", height:"40px", fontSize:"16px"}} onChange={(e) => setToId(e.target.value)}></input>
      <button style={{height:"40px", fontSize:"16px", marginLeft:"10px"}} onClick={() => client.dial(userToCall)}>Call</button>
      <button style={{height:"40px", fontSize:"16px", marginLeft:"10px"}} onClick={() => client.end()}>END CALL for CALLER</button>
      

      {store.callerSignal && (
          <>
            Call from {store.callerUid}
            <button onClick={() => client.answer()}>Accept</button>
            <br />
            <button onClick={() => client.end()}>End</button>
          </>
        )}{' '}
        <br />

        <video playsInline ref={userRef} muted autoPlay style={{ width: '300px' }} />
      <video playsInline ref={callerRef} autoPlay style={{ width: '300px' }} />

    </div>
  )
}
