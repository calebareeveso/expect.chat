import RedirectToApp from "@/components/redirect";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "Expect Chat - App",
    openGraph: {
      title: "Expect Chat - App",
      description:
        "Chat With Your Future Self To Check In On Your Expectations",
      images: [
        `https://res.cloudinary.com/dgdnihwti/image/upload/v1728932782/expechchat_banner_o3jz2z.png`,
      ],
    },
  };
}

export default function Home() {
  return <RedirectToApp />;
}
