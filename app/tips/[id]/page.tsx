'use client'

// pages/article/[id].js
import articles from '@/lib/data';
import { useParams } from 'next/navigation';

export default function ArticlePage() {
    const { id } = useParams();  // Get the dynamic id parameter from the URL

    // Pastikan id ada dan bertipe string sebelum menggunakan parseInt
    const article = id && typeof id === 'string' 
        ? articles.find(item => item.id === parseInt(id, 10)) 
        : null;

    if (!article) {
        return <p className="p-8 text-center">Artikel tidak ditemukan</p>;
    }

    return (
        <div className="p-8 bg-base-200 min-h-screen">
            <div className="prose mx-auto space-y-6 max-w-3xl"> {/* Mengatur max-width dan margin otomatis */}
                <h1 className="text-4xl font-bold">{article.title}</h1>
                {/* Rendering the article body with proper HTML tags for paragraphs and lists */}
                <div 
                    className="article-content text-lg text-justify text-pretty" 
                    dangerouslySetInnerHTML={{ __html: formatArticleBody(article.body) }} 
                />
            </div>
            <button
                onClick={() => window.history.back()}  // Navigate back in history
                className="btn btn-secondary mt-8"
            >
                Kembali
            </button>
        </div>
    );
}

// Function to format the article body text, adding paragraphs and lists where necessary
function formatArticleBody(body: string) {
    // Replace newlines with <p> tags for paragraphs and add <hr> for horizontal lines
    return body
        .replace(/\n/g, '<p class="mb-4"></p>')  // Ensure paragraphs are separated
        .replace(/- (.*)/g, '<ul><li>$1</li></ul>')  // Convert bullet points into list items
        .replace(/\n\n/g, '<hr class="my-4">');  // Add horizontal lines for extra newlines
}
