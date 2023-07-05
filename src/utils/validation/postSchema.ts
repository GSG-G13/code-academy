import { z } from 'zod';

const postSchema = z.object({
  postContent: z
    .string()
    .nonempty('Post cannot be empty')
    .min(2, 'Post must be at least 2 characters long'),
  postImage: z
    .string()
    .refine((value) => /\.(jpe?g|png|gif)$/gi.test(value), {
      message: 'Invalid image format. Only JPEG, PNG, and GIF are supported.',
    })
    .optional()
    .nullable(),
});

export default postSchema;
