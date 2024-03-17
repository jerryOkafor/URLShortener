import Container from "@/app/components/container";
import Link from "next/link";


export default function Header() {
    return (
        <header className="py-6">
            <Container>
                <nav className="flex-row space-x-5">
                    <Link href="/">Home</Link>
                    <Link href="/links">All links</Link>
                    <Link href="/about">About</Link>
                </nav>
            </Container>
        </header>
    )
}