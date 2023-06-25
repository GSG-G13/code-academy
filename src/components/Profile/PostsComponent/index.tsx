import { useState } from 'react';
import { CardContent, CardHeader, Avatar, Typography, TextField, Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CommentIcon from '@mui/icons-material/Comment';
import { v4 as uuid } from 'uuid';
import {
  StyledCard,
  TitleWrapper,
  StyledTypography,
  ProfileImageWrapper,
  ProfileImage,
  ProfileComment,
  CommentContent,
} from './style';

interface Iprops {
  author: string;
  datePost: Date;
  cohort: string;
  state: string;
  imageSrc: string;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  date: Date;
}

const ProfileCard = ({ author, datePost, cohort, state, imageSrc }: Iprops) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentButtonClick = () => {
    setShowCommentInput(true);
  };

  const handleAddComment = () => {
    if (comment.trim() === '') return;

    const newComment: Comment = {
      id: uuid(),
      author: 'You',
      content: comment,
      date: new Date(),
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setComment('');
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar>{author[0]}</Avatar>}
        title={
          <TitleWrapper>
            <StyledTypography variant="subtitle1">{author}</StyledTypography>
          </TitleWrapper>
        }
        subheader={datePost.toString()}
      />
      <CardContent>
        <ProfileImageWrapper>
          <div style={{ background: 'black' }}>
            <ProfileImage style={{ backgroundImage: `url(${imageSrc})` }} />
          </div>
        </ProfileImageWrapper>
        {comments.map((comment) => (
          <ProfileComment key={comment.id}>
            <Avatar>U</Avatar>
            <CommentContent>
              <Typography variant="body2" gutterBottom style={{ fontWeight: 'bold' }}>
                {comment.author}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ fontSize: '20px', color: 'grey' }}
              >
                {comment.content}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Posted by
                {comment.author}
                FiberManualRecordIcon
                {comment.date.toString()}
              </Typography>
            </CommentContent>
          </ProfileComment>
        ))}
        {showCommentInput ? (
          <>
            <TextField
              label="Add a comment"
              variant="outlined"
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddComment}
              style={{
                marginTop: '15px',
              }}
            >
              Add Comment
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            startIcon={<CommentIcon />}
            onClick={handleCommentButtonClick}
          />
        )}
      </CardContent>
    </StyledCard>
  );
};

const PostsComponent = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: 'Shatha Amin',
      datePost: new Date(),
      cohort: 'Cohort 2023',
      state: 'Active',
      imageSrc: 'https://example.com/profile-image.jpg',
    },
    {
      id: '2',
      author: 'Shatha Amin',
      datePost: new Date(),
      cohort: 'Cohort 2022',
      state: 'Inactive',
      imageSrc: 'https://example.com/profile-image.jpg',
    },
  ]);

  return (
    <div>
      {posts.map((post) => (
        <ProfileCard
          key={post.id}
          author={post.author}
          datePost={post.datePost}
          cohort={post.cohort}
          state={post.state}
          imageSrc={post.imageSrc}
        />
      ))}
    </div>
  );
};

export default PostsComponent;
