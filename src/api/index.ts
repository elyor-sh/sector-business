import {instance} from "./interceptor";
import {PostModel, PostQueryModel} from "../model/post.model";

export const apiGetPosts = (params?: PostQueryModel) => instance.get<PostModel[]>('/', {params})