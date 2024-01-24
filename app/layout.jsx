import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
	default: "Register",
	template: "Register | %s"
  },
  description: "Register yourself and your team for the event",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Toaster />
			</body>
		</html>
  );
}
