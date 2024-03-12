import Link from "next/link";

export default function hello () {
    return (
      <div>
        <h2><Link href={'/'}>Home</Link></h2>
        <h1>Hello World from Karachi. <br />
        its going to display on browser becasue next.js will always exicute the page.tsx file and its default.</h1>
      </div>
      )
  }