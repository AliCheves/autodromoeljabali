import type { Metadata } from "next";
import { NEWSLETTER_CONTENT } from "@/config/content/newsletter";
import NewsletterPageClient from "./page.client";

export function generateMetadata(): Metadata {
    return {
        title: NEWSLETTER_CONTENT.meta.title,
        description: NEWSLETTER_CONTENT.meta.description,
    };
}

export default function NewsletterPage() {
    return <NewsletterPageClient />;
}
