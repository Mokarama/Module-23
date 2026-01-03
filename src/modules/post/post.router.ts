
import express, {Router} from 'express';
import { PostController } from './post.controller';


const router =express.Router();

router.post(
    "/",(req, res)=>{
        // res.send("Create a new post");
        PostController.createPost
    })

export const postRouter:Router=router;