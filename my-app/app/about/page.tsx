import Link from "next/link"

export default function page() {
    return(
        <div>
            <Link href={'/'}>Home</Link>
            <h1>Welcome! This is about page.</h1>
            <Link href={'blogs/blog1'}>blog1</Link>
        </div>
    )
}