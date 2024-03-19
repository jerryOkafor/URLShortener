import Container from "@/app/components/container";
import Header from "@/app/components/header";
import React from "react";
import Footer from "@/app/components/footer";
import CreateShortLinkForm from "@/app/components/clipboardWithTooltip";

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header/>
                <div className="h-full w-full">
                    <div className="ml-auto mr-auto mb-auto mt-60">
                        <Container>
                            <CreateShortLinkForm/>
                        </Container>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}