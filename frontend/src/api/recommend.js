// src/api/recommend.js
export async function getRecommendations(wishlist) {
  const res = await fetch("http://localhost:5001/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ wishlist }),
  });
  if (!res.ok) throw new Error("Failed to fetch recommendations");
  return res.json();
}
