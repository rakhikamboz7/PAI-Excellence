import { createClient } from "@sanity/client"

// Create a single client instance that we can use across the app
export const client = createClient({
  projectId: "nwip9jca", // Replace with your actual Sanity project ID
  dataset: "production",
  useCdn: false, // Set to false for real-time updates
  apiVersion: "2025-06-04",
  token: "skft3UkPp2v6KjLGWS8N7NfTeYUkGFcSmXuxLSb8QtUTqgnsUYJFxHXbyhP7AlxaFXmvvhOsUqHmaKZWRDsh6e3UDO40dua0SUXUGalOIki8Dqg4DGGPYXCOLGk4xcC9jFqJQUwtxPv4EGw6764hgS7wnCSY95pDXWc86vVl8Wmca03M1dcE", // Replace with your actual Sanity token
})

// For public read operations (no token needed)
export const publicClient = createClient({
  projectId: "nwip9jca", // Replace with your actual Sanity project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-06-04",
  token: null,
})

// Helper function to check if Sanity is connected
export const checkSanityConnection = async () => {
  try {
    const result = await client.fetch('*[_type == "sanity.imageAsset"][0]')
    return !!result
  } catch (error) {
    console.error("Sanity connection error:", error)
    return false
  }
}



// 
// 