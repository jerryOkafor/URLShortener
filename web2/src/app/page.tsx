"use client";

import Container from "@/app/components/container";
import Header from "@/app/components/header";
import React, { useState } from "react";
import Footer from "@/app/components/footer";
import CreateShortLinkForm from "@/app/components/createShortLinkForm";

export default function Home() {
  const [isLoading, seIsLoading] = useState();

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header loading={isLoading} />
        <div className="h-full w-full">
          <div className="ml-auto mr-auto mb-auto mt-60">
            <Container>
              {/* <h1>{session.username}</h1> */}
              <CreateShortLinkForm />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
