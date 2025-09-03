export const getCars = async () => {
  const res = await fetch("http://localhost:3000/api/cars");

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  return res.json();
};

export const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};
