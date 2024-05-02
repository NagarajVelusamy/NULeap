"use client";

import { usePosts } from "@/hooks/usePosts";
import { User } from "@/types/User";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const JOB_LIST = [
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Game Developer",
  "Embedded Systems Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Data Engineer",
];

export default function Home() {
  // USE STATE
  const [users, setUsers] = useState<User[] | []>([]);

  console.log(users.length)
  const [search, setSearch] = useState<string>("");

    // USE EFFECT
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // CUSTOM HOOK
  const { posts, error } = usePosts();

  // USE REF
  const inputRef = useRef<HTMLInputElement>(null);

  // USE CALLBACK
  const filterJobsByKeyWord = useCallback((keyword: string) => {
    return JOB_LIST.filter((job) =>
      job.toLowerCase().includes(keyword.toLowerCase())
    );
  }, []);

  // USE MEMO
  const filteredJobs = useMemo(() => {
    if (search === "") return JOB_LIST;

    return filterJobsByKeyWord(search);
  }, [search, filterJobsByKeyWord]);

  return (
    <main>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex">
          <div>
            <h2>Users</h2>
            {users?.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </div>
          <div>
            <h2>Jobs</h2>
            {filteredJobs?.map((job) => (
              <div key={job}>{job}</div>
            ))}
          </div>
        </div>
        <div>
          <h2>Posts</h2>
          {error && <p style={{color:"red"}}>{error}</p>}
          {
            posts.slice(0,10).map(post => {
              return <div key={post.id}>{post.title}</div>
            })
          }
        </div>
      </div>
    </main>
  );
}
