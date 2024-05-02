import { Post } from "@/types/Post";
import { useEffect, useState } from "react";

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch(() => setError("Something went wrong"));
    }, [])
    

    return {
        posts,
        error
    };
}