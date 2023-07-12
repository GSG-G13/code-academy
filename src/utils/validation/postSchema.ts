import { z } from 'zod';

const postSchema = z.object({
  postContent: z
    .string()
    .nonempty('Post cannot be empty')
    .min(2, 'Post must be at least 2 characters long'),
});
export default postSchema;
