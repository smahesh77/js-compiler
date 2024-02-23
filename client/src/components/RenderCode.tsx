import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function RenderCode() {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const combinedCOde = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCOde
  )}`;

  return (
    <div className="bg-white border-2 border-red-500 h-[calc(100dvh-60px)]">
      <iframe src={iframeCode} className="w-full h-full"/>
    </div>
  );
}

export default RenderCode;
