import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-[#494949] md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link 
          href="/tokens/chart" 
          className={`flex flex-col items-center ${pathname === '/tokens/chart' ? 'text-primary-blue' : 'text-white'}`}
        >
          <img 
            src="/funifo.svg" 
            alt="Fun Info" 
            className="w-6 h-6"
          />
          <span className="text-xs mt-1">Fun Org info</span>
        </Link>
        
        <Link 
          href="/tokens/swap" 
          className={`flex flex-col items-center ${pathname === '/tokens/swap' ? 'text-primary-blue' : 'text-white'}`}
        >
          <img 
            src="/tokimg.svg" 
            alt="Token" 
            className="w-6 h-6"
          />
          <span className="text-xs mt-1">Token</span>
        </Link>

        <Link 
          href="/tokens/comments" 
          className={`flex flex-col items-center ${pathname === '/tokens/comments' ? 'text-primary-blue' : 'text-white'}`}
        >
          <img 
            src="/communityimg.svg" 
            alt="Community" 
            className="w-6 h-6"
          />
          <span className="text-xs mt-1">Community</span>
        </Link>
      </div>
    </div>
  );
}; 