export const handleLike = async (recipeId, recipeOwnerEmail, currentUser, setLikeCount) => {
  if (!currentUser || currentUser.email === recipeOwnerEmail) {
    alert("You cannot like your own recipe.");
    return;
  }

  try {
    const res = await fetch(`https://recipe-book-server-khaki.vercel.app/recipes/${recipeId}/like`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: currentUser.email })
    });

    if (res.ok) {
      setLikeCount(prev => prev + 1);
    } else {
      const data = await res.json();
      alert(data.message || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error.");
  }
};
