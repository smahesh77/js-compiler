import Codeediter from "@/components/Codeediter";
import EditerHeader from "@/components/EditerHeader";
import RenderCode from "@/components/RenderCode";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        // 100 dvh is max height, min-w is the minimum width it will always have
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <EditerHeader />
        <Codeediter />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)]  min-w-[350px]"
        defaultSize={50}
        // the default size is how the windows load when opened it could be 10-90, 70-30
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
