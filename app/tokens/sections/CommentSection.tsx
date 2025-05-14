import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/tab";
import { TopHoldersSection } from './TopHoldersSection';

interface Comment {
  id: number;
  username: string;
  content: string;
  timestamp: string;
  replies: number;
  likes: number;
}

export const CommentsSection = () => {
  const comments: Comment[] = [
    {
      id: 1,
      username: 'VinZhC',
      content: 'This is the funniest shit i ever seen this year lmao',
      timestamp: '26/12/23, 2:40:56 AM',
      replies: 0,
      likes: 0,
    },
    {
      id: 2,
      username: 'VinZhC',
      content: 'This is the funniest shit i ever seen this year lmao',
      timestamp: '26/12/23, 2:40:56 AM',
      replies: 0,
      likes: 0,
    },
    {
      id: 3,
      username: 'hey',
      content: 'Funny because we asked them to run a model vs model competition but they didnt want to',
      timestamp: '26/12/23, 2:40:56 AM',
      replies: 0,
      likes: 0,
    }
  ];

  const holders = [
    { id: 1, name: "MythMyth", percentage: "10.8%" },
    { id: 2, name: "Kayan", percentage: "8.8%" },
    { id: 3, name: "kkkki", percentage: "7.8%" },
    { id: 4, name: "ttrgpo", percentage: "6.8%" },
    { id: 5, name: "ttrgpo", percentage: "6.8%" },
    { id: 6, name: "ttrgpo", percentage: "6.8%" },
    { id: 7, name: "ttrgpo", percentage: "6.8%" },
    { id: 8, name: "ttrgpo", percentage: "6.8%" },
    { id: 9, name: "ttrgpo", percentage: "6.8%" },
    { id: 10, name: "ttrgpo", percentage: "6.8%" },
  ];

  const CommentBubble = ({ comment }: { comment: Comment }) => (
    <div className="bg-[#1E1E1E] rounded-[20px] p-4">
      <div className="inline-flex items-center justify-center px-2 py-0.5 bg-black rounded-[10px] border border-[#494949]">
        <span className="text-white text-[10px] font-medium">{comment.username}</span>
      </div>
      <p className="text-white text-[13px] mt-3 mb-3">{comment.content}</p>
      <div className="flex items-center justify-between border-t border-[#494949] pt-3">
        <span className="text-[#494949] text-[10px]">{comment.timestamp}</span>
        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1">
            <img
              src="/reply.svg"
              alt="Reply"
              className="w-3.5 h-3.5"
            />
            <span className="text-white text-[10px]">Reply</span>
          </button>
          <button className="flex items-center gap-1">
            <img
              src="/like.svg"
              alt="Like"
              className="w-3 h-3"
            />
            <span className="text-white text-[10px]">{comment.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );

  const CommentsContent = () => (
    <div className="space-y-4">
      <div className="flex items-center">
        <span className="text-xs text-[#30EAF7]">Newest</span>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentBubble key={comment.id} comment={comment} />
        ))}
      </div>

      <div className="relative mt-4">
        <div className="flex items-center gap-3 mb-4">
          <button className="w-[27px] h-[27px]">
            <img src="/attach.svg" alt="Attach" className="w-full h-full" />
          </button>
          <button className="w-[27px] h-[27px]">
            <img src="/emoji.svg" alt="Emoji" className="w-full h-full" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Input text here..."
            className="w-full h-[41px] bg-transparent border border-[#494949] rounded-[20px] pl-4 pr-20 text-[#494949] text-[10px] focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#30EAF7] rounded-full px-2 py-1 flex items-center gap-1">
            <img src="/funsend.svg" alt="Send" className="w-3 h-3" />
            <span className="text-black text-xs font-medium">Send</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile view with tabs
  const MobileView = () => {
    const [activeTab, setActiveTab] = React.useState('comments');

    return (
      <>
        <div className="bg-[#171717] rounded-xl">
          <Tabs defaultValue="comments" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="flex w-full p-2 bg-transparent gap-2">
              <TabsTrigger 
                value="comments"
                className="flex-1 rounded-full bg-[#ffffff1a] text-white data-[state=active]:bg-[#ffffff1a] data-[state=active]:text-[#30EAF7] h-7 text-xs"
              >
                Comments
              </TabsTrigger>
              <TabsTrigger 
                value="holder-distribution"
                className="flex-1 rounded-full bg-[#ffffff1a] text-white data-[state=active]:bg-[#ffffff1a] data-[state=active]:text-[#30EAF7] h-7 text-xs"
              >
                Holder distribution
              </TabsTrigger>
            </TabsList>

            <TabsContent value="comments" className="p-4">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-xs text-[#30EAF7]">Newest</span>
                </div>

                <div className="space-y-4">
                  {comments.map((comment) => (
                    <CommentBubble key={comment.id} comment={comment} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="holder-distribution" className="p-4">
              <TopHoldersSection />
            </TabsContent>
          </Tabs>
        </div>

        {/* Mobile Comment Input - Fixed at bottom, only shown in comments tab */}
        {activeTab === 'comments' && (
          <div className="fixed bottom-16 left-0 right-0 bg-black px-4 py-3 border-t border-[#494949] md:hidden">
            <div className="relative flex items-center gap-2">
              <div className="flex items-center gap-2">
                <button className="w-[27px] h-[27px] flex items-center justify-center">
                  <img src="/attach.svg" alt="Attach" className="w-5 h-5" />
                </button>
                <button className="w-[27px] h-[27px] flex items-center justify-center">
                  <img src="/emoji.svg" alt="Emoji" className="w-5 h-5" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Input text here..."
                className="flex-1 h-[41px] bg-transparent border border-[#494949] rounded-[20px] pl-4 pr-20 text-[#494949] text-[10px] focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#30EAF7] rounded-full px-2 py-1 flex items-center gap-1">
                <img src="/funsend.svg" alt="Send" className="w-3 h-3" />
                <span className="text-black text-xs font-medium">Send</span>
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  // Desktop view without tabs
  const DesktopView = () => (
    <div className="bg-[#171717] rounded-xl p-4">
      <CommentsContent />
    </div>
  );

  return (
    <>
      <div className="md:hidden">
        <MobileView />
      </div>
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </>
  );
};
