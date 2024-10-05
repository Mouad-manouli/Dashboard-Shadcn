import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Bell } from "lucide-react"
 
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="w-full  border-b border-gray-300 flex items-center justify-between">
      <div className="relative w-1/2 ml-4 ml-5">
        <span className="absolute inset-y-0 left-3 flex items-center">
          <Search className="text-gray-500" />
        </span>
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 w-full m-4"
        />
      </div>
      <div className="mr-5 ">
        <Button variant="outline" size="icon" >
            <Bell className="stroke-gray-500"/>
        </Button>
      </div>
    </div>
  );
}
