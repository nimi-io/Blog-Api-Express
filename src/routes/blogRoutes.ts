import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";
import {
  creatPost,
  deletePost,
  getAllPost,
  getPost,
  updatePost,
} from "../controller/blogController";

const router = Router();

router.get("/posts", getAllPost);

router.get("/posts/:id", getPost);

router.post("/posts", creatPost);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", deletePost);

export default router;
