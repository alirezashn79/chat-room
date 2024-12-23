import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "@/components/template/room/sidebar/Sidebar.tsx";
import ChatBox from "@/components/template/room/chatbox/ChatBox.tsx";

export default function RoomPage() {
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25} minSize={20}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} minSize={25}>
          <ChatBox />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
