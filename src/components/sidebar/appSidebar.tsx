
"use client"

import * as React from "react"
import { Brain } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { SidebarMenuItems } from "./SidebarMenuItems"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      className="bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)] shadow-lg backdrop-blur-md rounded-lg"
    >
      {/* Header */}
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Brain className="size-6 text-[var(--sidebar-primary)]" />
          <h1 className="text-xl font-bold">BrainyNotes</h1>
        </div>
        <Separator className="my-4 bg-[var(--sidebar-border)]" />
      </SidebarHeader>

      {/* Main Content */}
      <SidebarContent className="p-4">
        <SidebarMenuItems />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4">
        <Separator className="my-4 bg-[var(--sidebar-border)]" />
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Not logged in</p>
          <div className="space-y-2">
            <Button variant="default" className="w-full">Login</Button>
            <Button variant="outline" className="w-full">Signup</Button>
          </div>
        </div>
      </SidebarFooter>

      {/* Sidebar Rail */}
      <SidebarRail />
    </Sidebar>
  )
}
