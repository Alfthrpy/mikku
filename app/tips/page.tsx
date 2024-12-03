// pages/index.js
import {articles} from '@/lib/data';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="p-8 bg-base-200 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-10">Daftar Artikel</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <div key={article.id} className="card shadow-lg bg-base-100 rounded-lg hover:shadow-2xl transition-shadow">
                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl font-semibold mb-4">{article.title}</h2>
                            <div className="card-actions justify-end">
                                <Link href={`/tips/${article.id}`} className="btn btn-primary">
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
