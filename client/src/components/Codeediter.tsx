import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import {draculaInit } from "@uiw/codemirror-theme-dracula";
import {
  loadLanguage,

} from "@uiw/codemirror-extensions-langs";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

function Codeediter() {
  const CurrentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useSelector((state:RootState) => state.compilerSlice.fullCode)
  const dispatch = useDispatch();
  const onChange = React.useCallback((value: string) => {
    // console.log("val:", val);
    // setValue(val);
    dispatch(updateCodeValue(value))
  }, []);
  return (
    <CodeMirror
      value={fullCode[CurrentLanguage]}
      height="calc(100vh - 60px - 50px)"
      className="code-editor"
      extensions={[loadLanguage(CurrentLanguage)!]} // give thr lang yo want the codeediter to recognize here
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}

export default Codeediter;
