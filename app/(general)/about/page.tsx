import { Metadata } from "next";

export const metadata: Metadata = {
    title: "JFM About Page",
    description: "Generated by me, about",
    keywords: ['About page', 'JFM', '...'],
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}
