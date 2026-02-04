import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/BlogData";

const contentDirectory = path.join(process.cwd(), "content/blog");

// Get all MDX files from the content directory
export function getAllPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(".mdx", ""));
  } catch {
    console.warn("Content directory not found, returning empty array");
    return [];
  }
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: slug,
      slug,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      content,
      author: data.author || "Anonymous",
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || 5,
      tags: data.tags || [],
      thumbnail: data.thumbnail || null,
      category: data.category || "General",
      ...data, // Include any additional frontmatter fields
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Get all posts sorted by date
export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories)).sort();
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(tags)).sort();
}

