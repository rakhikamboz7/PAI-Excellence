import { createClient } from "@sanity/client"

// Create a single client instance that we can use across the app
export const client = createClient({
  projectId: "nwip9jca", // Replace with your actual Sanity project ID
  dataset: "production",
  useCdn: false, // Set to false for real-time updates
  apiVersion: "2025-06-04",
  token: "", // Replace with your actual Sanity token
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