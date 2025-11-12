import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
const Homepage = async () => {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return <div className="text-red-500">Homepage</div>;
};

export default Homepage;
