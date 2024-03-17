import Container from "@/app/components/container";
import Header from "@/app/components/header";
import {CreateShortLinkForm} from "@/app/components/createShortLinkForm";
import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex flex-col space-x-4">
                <Header/>
                <div className="h-full">
                    <div className="ml-auto mr-auto mb-auto mt-60">
                        <Container>
                            <div className="flex-col">
                                <CreateShortLinkForm/>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}