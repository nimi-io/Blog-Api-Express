import { getRepository } from "typeorm";
import { Post } from "../entity/Post";
import { Request, Response } from "express";

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const postRepository = getRepository(Post);

    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const offset = (page - 1) * limit;

    const search = req.query.search as string;
    const where = search
      ? [{ title: `%${search}%` }, { content: `%${search}%` }]
      : {};

    const posts = await postRepository.find({
      where,
      order: { id: "DESC" },
      take: limit,
      skip: offset,
    });

    res.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching blog posts." });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.id, 10);
    const postRepository = getRepository(Post);

    const post = await postRepository.findOne(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found." });
    }

    res.json(post);
  } catch (error) {
    console.error("Error fetching a specific post:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the post." });
  }
};

export const creatPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const postRepository = getRepository(Post);

    const newPost = postRepository.create({ title, content });
    await postRepository.save(newPost);

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error adding a new post:", error);
    res.status(500).json({ error: "An error occurred while adding the post." });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.id, 10);
    const { title, content } = req.body;
    const postRepository = getRepository(Post);

    const existingPost = await postRepository.findOne(postId);

    if (!existingPost) {
      return res.status(404).json({ error: "Post not found." });
    }

    existingPost.title = title;
    existingPost.content = content;

    await postRepository.save(existingPost);

    res.json(existingPost);
  } catch (error) {
    console.error("Error editing a post:", error);
    res
      .status(500)
      .json({ error: "An error occurred while editing the post." });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.id, 10);
    const postRepository = getRepository(Post);

    const existingPost = await postRepository.findOne(postId);

    if (!existingPost) {
      return res.status(404).json({ error: "Post not found." });
    }

    await postRepository.remove(existingPost);

    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error("Error deleting a post:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the post." });
  }
};
