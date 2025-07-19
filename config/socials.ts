import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Harshgupta2902",
    icon: Icons.gitHub,
    link: "https://github.com/Harshgupta2902",
  },
  {
    name: "LinkedIn",
    username: "Harsh Gupta",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/harsh-gupta2901/",
  },
  {
    name: "Gmail",
    username: "Harsh Gupta",
    icon: Icons.gmail,
    link: "mailto:harsh1248gupta@gmail.com",
  },
];
