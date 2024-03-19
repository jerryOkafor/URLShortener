import Header from "@/app/components/header";
import Container from "@/app/components/container";
import Link from "next/link";
import {ShortLink} from "@/app/interfaces";
import {showAllLinks} from "@/app/actions";

export default async function Links() {
    let allLinks: [ShortLink] = await showAllLinks()

    return (
        <>
            <Header/>
            <Container>
                <div className="flex-col w-full">
                    <p className="text-red-300">List of all generated short links</p>
                </div>

                {allLinks.length ? (
                    <ul className="mt-8 flex-col space-y-4">
                        {allLinks.map((shortLink) => (
                            <li key={shortLink.id} className="flex flex-row justify-between space-x-2 w-full">
                                <Link href={shortLink.short_url}
                                      target="_blank">{shortLink.short_url}</Link>
                                <p>Clicks: {shortLink.hit}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EmptyState/>
                )}
            </Container>
        </>
    )
}

function EmptyState() {
    return (
        <>
            <div>
                <p>No link generated yet, go home and generate some links</p>
            </div>
        </>
    )
}