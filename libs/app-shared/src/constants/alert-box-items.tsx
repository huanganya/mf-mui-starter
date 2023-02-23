import { ToggleButtonsProp } from "@mf-mui-starter/common-lib";
import { AlertBoxItemType } from "../lib/components/alert-box-item";

export const AlertBoxOptions: ToggleButtonsProp[] = [
    { value: 'notifications', label: 'Notifications'},
    { value: 'announcements', label: 'Announcements' },
];

export const AlertBoxData: Record<string, AlertBoxItemType[]> = {
    notifications: [
      {
        title: "Title-1-1",
        content: "Title-1-2",
        date: new Date(),
        read: false,
      },
      {
        title: "Title-1-2",
        content: "Title-1-2",
        date: new Date(),
        read: true,
      }
    ],
    announcements: [
      {
        title: "Title-2-1",
        content: "Title-2-1",
        date: new Date(),
        read: true,
      },
      {
        title: "Title-2-2",
        content: "Title-2-2",
        date: new Date(),
        read: true,
      }
    ],
}