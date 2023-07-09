import { Avatar, FormLabel } from '@mui/material';
import { RiAttachment2 } from 'react-icons/ri';
import LoadingButton from '@mui/lab/LoadingButton';

import { PostDetails, PostWrapper, TextArea, FileAndBtn, File } from './style';

const AddPost = () => (
  <PostWrapper>
    <Avatar alt="Khaled" src="Khaled" sx={{ width: 45, height: 45 }} />
    <PostDetails>
      <TextArea placeholder="Whats New Khaled?" />
      <FileAndBtn>
        <File>
          <FormLabel htmlFor="Image">
            <RiAttachment2 />
          </FormLabel>
          <input type="file" name="post-img" id="Image" hidden accept="image/*" />
        </File>
        <LoadingButton loading={false} variant="contained" size="small">
          Post
        </LoadingButton>
      </FileAndBtn>
    </PostDetails>
  </PostWrapper>
);

export default AddPost;
