import { Blog } from "@/features/blog/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Myadaram Sai Kiran",
  description: "Exploring the latest in technology and development",
};

export default function BlogPage() {
  return <Blog />;
}

