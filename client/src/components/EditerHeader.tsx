import { Save, Share2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function EditerHeader() {
  return (
    <div className=" _EH h-[50px] bg-black text-white p=2 flex items-center justify-between">
      <div className="_btn_container flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
        >
          <Save size={16} />
          save
        </Button>
        <Button
          className="flex justify-center items-center gap-1"
          variant="secondary"
        >
          <Share2Icon size={16} />
          share
        </Button>
      </div>
      <div className="_tab_switcher">
        <Select defaultValue="html">
          <SelectTrigger className="w-[180px] bg-gray-800 focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default EditerHeader;
