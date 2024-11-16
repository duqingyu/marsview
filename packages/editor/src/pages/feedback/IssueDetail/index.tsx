import { useState } from 'react'
import styles from './index.module.less'
import { Button, Image, Tag,Typography, Input, Avatar } from 'antd'
import { CheckCircleFilled, CheckOutlined, CloseCircleOutlined, FrownOutlined, HeartOutlined, LikeOutlined, SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography;
const { TextArea } = Input;

interface User {
  id: string;
  name: string;
  avatar: string;
}

const currentUser: User = {
  id: 'current-user',
  name: 'Current User',
  avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
};

export default function IssueDetail() {
  const [likes, setLikes] = useState(156)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }
    setHasLiked(!hasLiked)
  }

  const itemDetail = {
    id: 5,
    title: '希望新增反馈功能',
    content: '当用户可以提供反馈时，我们能够更好地了解他们的需求和意见。这有助于改进产品和服务，使其更贴近用户的期望，从而提高用户满意度。此外，用户反馈也为我们提供了改进产品和服务的宝贵线索，帮助我们更好地满足他们的需求。因此，新增反馈功能对于促进用户参与、提高产品质量、以及加强用户与产品之间的互动十分必要。',
    isSolve: true,
    isTop: true,
    like: 0,
    userAvatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    time: '2024-09-01',
    userName: '用户名',
    type: 'advise',
  }

  const demoComments = [
    {
      id: 1,
      userAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      userName: "Garrett",
      content: "小说平台，漫画平台",
      time: "2024-10-08 08:30",
      helpful: true
    },
    {
      id: 2,
      userAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      userName: "白码",
      content: "有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码有没有插件源码 ",
      time: "2024-09-29 12:01",
      helpful: false
    }
  ]

  const [replyContent, setReplyContent] = useState('');
  const [isResolved, setIsResolved] = useState(false);

  const handleReply = () => {
    console.log('Reply submitted:', replyContent);
    setReplyContent('');
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{itemDetail.title}</h1>
          <div className={styles.tagContainer}>
              {
                itemDetail.type === 'bug' ? (
                  <span className={`${styles.tag} ${styles.tagBug}`}>Bug</span>
                ) : itemDetail.type === 'advise' ? (
                  <span className={`${styles.tag} ${styles.tagAdvise}`}>建议</span>
                ) : (
                  <span className={`${styles.tag} ${styles.tagOther}`}>其他</span>
                )
              }
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.avatar}>
              <Image src={itemDetail.userAvatar} alt={itemDetail.userName} width={40} height={40} />
            </div>
            <div>
              <div className={styles.authorName}>{itemDetail.userName}</div>
              <div className={styles.authorTime}>
                发布于 {itemDetail.time} • {itemDetail.isTop ? '置顶' : '未置顶'}
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleLike}
          className={`${styles.likeButton} ${hasLiked ? styles.likeButtonActive : styles.likeButtonInactive}`}
        >
          {/* <ThumbsUp className={`h-4 w-4 ${hasLiked ? 'fill-current' : ''}`} /> */}
          <span><HeartOutlined /> {likes}</span>
        </Button>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.imageGallery}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.imageWrapper}>
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                alt={`Image ${i}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className={styles.description}>
          {
            itemDetail.content.split('\n').map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>{paragraph}</p>
            ))
          }
        </div>
      </div>

        {/* Status Card */}
        <div className={styles.status}>
        {
          itemDetail.isSolve ? (
              <div className={styles.statusCard}>
                <div className={styles.statusContent}>
                  <div className={styles.statusText}>
                    <CheckCircleFilled className={styles.solveIcon} /> <span>
                      {
                        itemDetail.type === 'bug' ? '问题已解决' : '建议已采纳'
                      }
                      </span>
                  </div>
                </div>
              </div>
          ) :(

            <div className={styles.statusCard}>
              <div className={styles.statusContent}>
                <div className={styles.statusText}>
                  <FrownOutlined /> <span>
                    {
                      itemDetail.type === 'bug' ? '问题未解决' : '建议未采纳'
                    }
                  </span>
                </div>
              </div>
            </div>
          )
        }
        {
          !itemDetail.isSolve? (
            <div className={styles.statusChange}>
                <div className={styles.statusChangeButton}>
                  <CheckOutlined className={styles.statusChangeIcon} />
                </div>
            </div>) : null
        }
      </div>

      {/* Comments Section */}
      <div className={styles.replyModule}>
          <Avatar src={currentUser.avatar} size={40} className={styles.userAvatar} />
          <div className={styles.replyInputArea}>
            <TextArea
              value={replyContent}
              showCount
              allowClear
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="写下你的评论..."
              autoSize={{ minRows: 2, maxRows:10 }}
            />
          </div>
          <div className={styles.action}>
            <SendOutlined className={styles.sendIcon} onClick={handleReply} />
          </div>
        </div>
      <div className={styles.commentsSection}>
        <div className={styles.commentsHeader}>
          {/* <MessageSquare className="h-5 w-5" /> */}
          <h2 className={styles.commentsTitle}>讨论 (18)</h2>
        </div>

        <div>
          {demoComments.map((comment) => (
            <div key={comment.id} className={styles.commentCard}>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  <Image src={comment.userAvatar} alt={comment.userName} width={30} height={30} />
                </div>
                <div className={styles.commentHeader}>
                  <div className={styles.commentAuthor}>{comment.userName}</div>
                  <div className={styles.commentTime}>{comment.time}</div>
                </div>
              </div>
              <p className={styles.commentContent}>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}