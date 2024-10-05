import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"

  import { User, Inbox, CreditCard, Bell, Settings, Lock, FileText } from 'lucide-react';

export default function Sidebar(){
    const listmenu={
                "groups": [
                    {
                    "name": "General",
                    "items": [
                        {
                        "name": "Profile",
                        "icon": <User className="mr-2 h-4 w-4"/>
                        },
                        {
                        "name": "Inbox",
                        "icon": <Inbox className="mr-2 h-4 w-4"/>
                        },
                        {
                        "name": "Billing",
                        "icon": <CreditCard className="mr-2 h-4 w-4"/>
                        },
                        {
                        "name": "Notification",
                        "icon": <Bell className="mr-2 h-4 w-4"/>
                        }
                    ]
                    },
                    {
                    "name": "Setting",
                    "items": [
                        {
                        "name": "General Setting",
                        "icon": <Settings className="mr-2 h-4 w-4"/>
                        },
                        {
                        "name": "Privacy",
                        "icon": <Lock className="mr-2 h-4 w-4"/>
                        },
                        {
                        "name": "Logs",
                        "icon": <FileText className="mr-2 h-4 w-4"/>
                        }
                    ]
                    }
        ]
      }
    return(
        <>
            <div className="w-80  border-r border-gray-300  h-screen pt-4">
                <div className="border border-gray-300 rounded-3xl flex mx-4 mb-4  p-3">
                    <Avatar className="mr-2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <strong>Mouad Manouli</strong>
                        <p className="text-xs text-gray-600">mouad.manouli.2003@gmail.com</p>
                    </div>
                </div>
                <Command className="ml-3 w-72 h-auto">
                        <CommandList>
                            {
                                listmenu.groups.map((menu,index)=> 
                                    <CommandGroup heading={menu.name} key={index}>
                                        {menu.items.map((item,index)=>
                                            <CommandItem key={index}>
                                                {item.icon}
                                                {item.name}
                                            </CommandItem>
                                        )}
                                    </CommandGroup>
                                )
                            }
                    </CommandList>
                </Command>
                
            </div>
        </>
    )
}