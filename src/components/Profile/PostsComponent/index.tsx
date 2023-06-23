import { useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { v4 as uuid } from 'uuid'; // Import UUID library

interface Iprops {
  auther: string;
  datePost: Date;
  cohort: string;
  state: string;
  imageSrc: string;
}

interface Comment {
  id: string; // Add id property
  author: string;
  content: string;
  date: Date;
}

const ProfileCard = ({ auther, datePost, cohort, state, imageSrc }: Iprops) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentButtonClick = () => {
    setShowCommentInput(true);
  };

  const handleAddComment = () => {
    if (comment.trim() === '') return;

    const newComment: Comment = {
      id: uuid(), // Generate unique id using UUID library
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
        avatar={<Avatar>{auther[0]}</Avatar>}
        title={(
          <TitleWrapper>
            <StyledTypography variant="subtitle1">{auther}</StyledTypography>
            <StyledTypography variant="subtitle2" color="textSecondary">
              {state}
            </StyledTypography>
            <Typography variant="body1" gutterBottom>
              <a href={cohort} style={{ color: '#48465b' }}>
                {cohort}
              </a>
            </Typography>
          </TitleWrapper>
        )}
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
            {' '}
            {/* Use unique id as key */}
            <Avatar>U</Avatar>
            <CommentContent>
              <Typography variant="body2" gutterBottom>
                {comment.author}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {comment.content}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Posted by
                {' '}
                {comment.author}
                {' '}
                •
                {' '}
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
            <Button variant="contained" color="primary" onClick={handleAddComment}>
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

const StyledCard = styled(Card)`
  width: 75%;
  margin: 20px;
  font-size: 13.6px;
`;

const ProfileImageWrapper = styled.div`
  background-color: black;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const ProfileComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const CommentContent = styled.div`
  margin-left: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const StyledTypography = styled(Typography)`
  font-size: 13.6px;
  margin-right: 5px;
  border-radius: 50%;
`;

export default ProfileCard;
