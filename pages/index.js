import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Planet from '../components/Planet';
import Particles from 'react-tsparticles';

import { RiTwitterLine, RiGithubLine, RiHeart3Line } from 'react-icons/ri';

const loadPlanets = (offset, limit) => {
  const options = { method: 'GET' };
  const owner = '0xEAb0028b493e029b41F5A4386f789507C00fdC84';
  const collection = 'crypto-spheres';

  // fetch (`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=${limit}&owner=${owner}&collection=${collection}`, options)
  //   .then (json => json.json ()).then (response => console.log (response))
  //   .catch (err => console.error (err));
}

export default function Home () {
  const [planets, setPlanets] = useState ([]);
  const [canLoadMorePlanets, setCanLoadMorePlanets] = useState (true);
  useEffect (() => loadPlanets (0, 20), []);
  return (
    <div className={styles.container}>
      <Particles
        id = "tsparticles"
        url = "/particles.json"
      />
      <Head>
        <title>CryptoSpheres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WELCOME TO CRYPTOSPHERES
        </h1>

        <div className = { styles ['description-wrapper'] }>
          <div className = {styles.description}>
            <div className = {styles.desctitle}>What are CryptoSpheres?</div>
            <b>CryptoSpheres</b> are digital collectibles stored on the Ethereum blockchain
            <br/>
          </div>

          <div className = {styles.description}>
            <div className = {styles.desctitle}>Huh?</div>
            Each CryptoSphere is a one of a kind planet that <b>you</b> can own!
          </div>
        </div>

        {/* <h1 className={styles.title}>
          Welcome to CryptoSpheres
        </h1>

        <p className = {styles.description}>
          <b>CryptoSpheres</b> are collection of digital collectibles stored on the Ethereum blockchain
          <br/>
        </p>

        <p className = {styles.description}>
          Each CryptoSphere is a one of a kind planet that <b>you</b> can own!
        </p>

        <div>
          {
            planets.map (planet => <Planet
              img = {planet.image_preview_url}
              permalink = { planet.permalink }
              asset_contract = { planet.asset_contract }
              token_id = { planet.token_id }
            />)
          }
        </div> */}

        
      </main>

      <footer className={styles.footer}>
          <div style = {{ color: 'gray' }}>Brought to you with {''} <RiHeart3Line className = {styles.heart} style = {{ color: 'white' }} /> by <a style = {{ color: '#1DA1F2' }} href = "https://twitter.com/andithemudkip">@andithemudkip</a></div>
          <div>
            <a href = "https://twitter.com/andithemudkip"><RiTwitterLine style = {{ color: '#1DA1F2' }} className = { styles.social }/> </a>
            <a href = "https://github.com/andithemudkip"><RiGithubLine style = {{ color: 'gray' }} className = { styles.social } /> </a>
          </div>
      </footer>
    </div>
  )
}
