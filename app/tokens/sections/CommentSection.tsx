import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/tab";
import { TopHoldersSection } from './TopHoldersSection';

interface Comment {
  id: number;
  username: string;
  content: string;
  timestamp: string;
  replies: number;
  likes: number;
  isCurrentUser?: boolean;
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
      isCurrentUser: false
    },
    {
      id: 2,
      username: 'VinZhC',
      content: 'This is the funniest shit i ever seen this year lmao',
      timestamp: '26/12/23, 2:40:56 AM',
      replies: 0,
      likes: 0,
      isCurrentUser: false
    },
    {
      id: 3,
      username: 'You',
      content: 'Funny because we asked them to run a model vs model competition but they didnt want to',
      timestamp: '26/12/23, 2:40:56 AM',
      replies: 0,
      likes: 0,
      isCurrentUser: true
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
    <div className={`flex gap-3 ${comment.isCurrentUser ? 'justify-end mt-8' : 'justify-start'}`}>
      {!comment.isCurrentUser && (
        <div className="w-[20px] h-[20px] rounded-full bg-[#1A1A1A] flex-shrink-0" />
      )}
      <div className={`flex flex-col max-w-[85%] ${comment.isCurrentUser ? 'items-end' : 'items-start'}`}>
        <div className={`rounded-[10px] p-2.5 ${comment.isCurrentUser ? 'bg-[#0000003B]' : 'bg-[#ffffff0d]'}`}>
          <div className="flex items-center gap-2">
            <span className="text-[#30EAF7] text-[13px] font-medium">{comment.username}</span>
          </div>
          <p className="text-white text-[13px] whitespace-pre-line mt-2">{comment.content}</p>
          <div className="flex items-center gap-4 mt-2 pt-2 border-t border-[#1A1A1A]">
            <span className="text-[#7F7F7F] text-[11px]">{comment.timestamp}</span>
            <button className="text-[#7F7F7F] text-[11px] hover:text-[#30EAF7] flex items-center gap-1">
              <img src="/reply.svg" alt="Reply" className="w-3.5 h-3.5" />
              <span>Reply</span>
            </button>
            <button className="text-[#7F7F7F] text-[11px] hover:text-[#30EAF7] flex items-center gap-1">
              <img src="/like.svg" alt="Like" className="w-3 h-3" />
              <span>{comment.likes}</span>
            </button>
          </div>
        </div>
      </div>
      {comment.isCurrentUser && (
        <div className="w-[20px] h-[20px] rounded-full bg-[#30EAF7] flex-shrink-0" />
      )}
    </div>
  );

  const CommentsContent = () => (
    <div className="space-y-4">
   

      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentBubble key={comment.id} comment={comment} />
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="text-[#7F7F7F] hover:text-[#30EAF7] w-[20px] h-[20px] flex items-center justify-center">
              <img src="/attach.svg" alt="Attach" className="w-5 h-5" />
            </button>
            <button className="text-[#7F7F7F] hover:text-[#30EAF7] w-[20px] h-[20px] flex items-center justify-center">
              <img src="/emoji.svg" alt="Emoji" className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 relative border border-[#494949] rounded-[10px] p-2.5">
            <input
              type="text"
              placeholder="Input text here..."
              className="w-full bg-transparent text-white placeholder-[#7F7F7F] text-[13px] focus:outline-none pr-24"
            />
            <button className="bg-[#30EAF7] text-black px-3 py-1 rounded-[10px] text-[13px] font-medium hover:bg-[#30EAF7]/90 flex items-center gap-1.5 absolute right-2.5 top-1/2 -translate-y-1/2">
              <img src="/funsend.svg" alt="Send" className="w-3 h-3" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile view with tabs
  const MobileView = () => {
    const [activeTab, setActiveTab] = React.useState('comments');

    return (
      <>
        <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF]">
          <div className="bg-[#171717] rounded-[10px]">
            // Example for your mobile tab triggers
// Place this inside your mobile content section

<Tabs defaultValue="comments" className="w-full mt-4">
  <TabsList className="flex bg-transparent p-0 h-auto mb-4">
    <TabsTrigger
      value="comments"
      className="flex-1 h-9 rounded-full font-medium text-sm
        data-[state=active]:bg-[#232323] data-[state=active]:text-[#30EAF7]
        data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#B0B0B0]
        transition-colors"
    >
      Comments
    </TabsTrigger>
    <TabsTrigger
      value="holders"
      className="flex-1 h-9 rounded-full font-medium text-sm ml-2
        data-[state=active]:bg-[#232323] data-[state=active]:text-[#30EAF7]
        data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#B0B0B0]
        transition-colors"
    >
      Holder distribution
    </TabsTrigger>
  </TabsList>
  <TabsContent value="comments">
    <CommentsSection />
  </TabsContent>
  <TabsContent value="holders">
    <TopHoldersSection />
  </TabsContent>
</Tabs>
          </div>
        </div>

        {/* Mobile Comment Input - Fixed at bottom, only shown in comments tab */}
        {activeTab === 'comments' && (
          <div className="fixed bottom-16 left-0 right-0 bg-black px-4 py-2.5 border-t border-[#1A1A1A] md:hidden">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <button className="text-[#7F7F7F] hover:text-[#30EAF7] w-[20px] h-[20px] flex items-center justify-center">
                  <img src="/attach.svg" alt="Attach" className="w-5 h-5" />
                </button>
                <button className="text-[#7F7F7F] hover:text-[#30EAF7] w-[20px] h-[20px] flex items-center justify-center">
                  <img src="/emoji.svg" alt="Emoji" className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 relative border border-[#494949] rounded-[10px] p-2.5">
                <input
                  type="text"
                  placeholder="Input text here..."
                  className="w-full bg-transparent text-white placeholder-[#7F7F7F] text-[13px] focus:outline-none pr-24"
                />
                <button className="bg-[#30EAF7] text-black px-3 py-1 rounded-[10px] text-[13px] font-medium hover:bg-[#30EAF7]/90 flex items-center gap-1.5 absolute right-2.5 top-1/2 -translate-y-1/2">
                  <img src="/funsend.svg" alt="Send" className="w-3 h-3" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  // Desktop view without tabs
  const DesktopView = () => (
    <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF]">
      <div className="bg-[#171717] rounded-[10px] p-2.5">
        <CommentsContent />
      </div>
    </div>
  );

  return (
    <>
      {/* Show mobile view on mobile devices */}
      <div className="md:hidden">
        <MobileView />
      </div>

      {/* Show desktop view on larger screens */}
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </>
  );
};
