import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Mybutton } from 'mybutton'

export default function Home() {
  return (
    <div>
     <h1>
      Here is test of my created package: 
      </h1> 
      < Mybutton />
    </div>
  )
}
