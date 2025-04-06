
import { File, History, Settings, Info } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SidebarMenuItems() {
  const mainMenuItems = [
    {
      title: "My Documents",
      icon: File,
      url: "#",
    },
    {
      title: "History",
      icon: History,
      url: "#",
    },
    {
      title: "Settings",
      icon: Settings,
      url: "#",
    },
    {
      title: "About",
      icon: Info,
      url: "#",
    },
  ]

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
      <SidebarMenu>
        {mainMenuItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url} className="flex items-center gap-2">
                <item.icon className="size-5" />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
