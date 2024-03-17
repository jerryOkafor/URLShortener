"use server";

import {apiKey, apiVersion, baseUrl} from "@/app/config/apiConfig";
import {ShortLink} from "@/app/interfaces";

export async function createShortLink(
    prevState: ShortLink,
    formData: FormData) {
    prevState.long_url = ""
    prevState.short_url = ""

    let longUrl = formData.get("url")
    console.log("Using Long url: ", longUrl)
    const response = await fetch(`${baseUrl}/api/${apiVersion}/url`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        },
        body: JSON.stringify({"long_url": longUrl}),
    });
    return await response.json()
}

export async function showAllLinks(): Promise<[ShortLink]> {
    const response = await fetch(`${baseUrl}/api/${apiVersion}/url`, {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        }
    });
    return await response.json()
}

export async function getShortLink(shortCode: String): Promise<ShortLink> {
    const response = await fetch(`${baseUrl}/api/${apiVersion}/url/${shortCode}`, {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        }
    });
    return await response.json()
}