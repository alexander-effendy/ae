import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useSetAtom } from "jotai";
import { sidebarAtom } from "@/atom/GeneralAtom";

const Sidebar = () => {
  const setSidebarSelection = useSetAtom(sidebarAtom);

  const tooltipStyle = "text-stone-500";
  const iconStyle = "text-stone-400 hover:text-white cursor-pointer";

  // helper function
  const handleClick = (label: string) => {
    setSidebarSelection(label);
  };

  return (
    <div className="w-[50px] border-l border-stone-800 flex flex-col items-center text-stone-400 text-xs py-2 gap-2">
      {/* Climbing */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={iconStyle}
            onClick={() => handleClick("climbing")}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M18 2H6v2H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2V2zm0 2v2h2v12h-2v2H6v-2H4V6h2V4h12zm-8 6h4v4h-4v-4zM8 6h8v2H8V6zm0 10H6V8h2v8zm8 0v2H8v-2h8zm0 0h2V8h-2v8z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className={tooltipStyle}>
          Climbing
        </TooltipContent>
      </Tooltip>

      {/* Schedule */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={iconStyle}
            onClick={() => handleClick("schedule")}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className={tooltipStyle}>
          Schedule
        </TooltipContent>
      </Tooltip>

      {/* Money */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={iconStyle}
            onClick={() => handleClick("money")}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className={tooltipStyle}>
          Money
        </TooltipContent>
      </Tooltip>

      {/* Urgent */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={iconStyle}
            onClick={() => handleClick("urgent")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M8 2h8v2H8V2ZM6 6V4h2v2H6Zm0 6H4V6h2v6Zm2 2H6v-2h2v2Zm8 0v4H8v-4h2v2h4v-2h2Zm2-2v2h-2v-2h2Zm0-6h2v6h-2V6Zm0 0V4h-2v2h2Zm-2 14H8v2h8v-2Z" />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className={tooltipStyle}>
          Urgent
        </TooltipContent>
      </Tooltip>

      {/* Credentials */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={iconStyle}
            onClick={() => handleClick("credentials")}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className={tooltipStyle}>
          Credentials
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
