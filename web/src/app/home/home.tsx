'use client'
import firebaseApp from "@/app/config/firebaseConfig";
import {useEffect} from "react";

export default function HomePage() {
    useEffect(() => {
        console.log("I am here", firebaseApp.name)
    })
    return (
        <div>
            <h1>Hello Next.js from Home</h1>
            <div>First Item</div>
            <div>Second Item</div>
            <div>Third Item</div>
        </div>
    );
}