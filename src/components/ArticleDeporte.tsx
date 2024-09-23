import Link from 'next/link';
import Image from 'next/image';

interface Props {
    article: {
        id: string;
        title: string;
        content: string;
        imageUrl: string;
        slug: string;
        category: string;
        createdAt: string;
        published: boolean;
    };
}

const ArticleDeporte = ({ article }: Props) => {
    const formattedDate = new Date(article.createdAt).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Link href={`/articulos/articulo/${article.slug}`}>
            <article className="bg-white relative shadow rounded-lg px-1.5 sm:p-3.5 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 max-w-xs h-[270px] sm:h-[420px]">
                <div className="h-[120px] sm:h-[190px] md:h-[200px]">
                    {article.imageUrl ? (
                        <div className="absolute top-0 left-0 right-0 h-auto rounded-t-lg">
                            <Image
                                alt={article.title}
                                src={article.imageUrl}
                                width={432}
                                height={252}
                                className="rounded-t-lg h-28 sm:h-[200px] object-cover transition-transform hover:scale-110"
                            />
                        </div>
                    ) : (
                        <div className="absolute top-0 left-0 right-0 h-auto rounded-t-lg">
                            <Image
                                alt={article.title}
                                src="/logovm.png"
                                width={432}
                                height={252}
                                className="rounded-t-lg h-50 object-cover transition-transform hover:scale-110"
                            />
                        </div>
                    )}
                </div>
                <div className="flex mt-1 sm:space-x-3 items-center space-x-1 m-auto">
                    <Image
                        alt="Miguel Angel"
                        src="/images/MiguelA.jpg"
                        className="rounded-full w-9 sm:w-14"
                        loading="lazy"
                        width={58}
                        height={58}
                        decoding="async"
                        data-nimg="1"
                    />
                    <div className="sm:space-y-0.5">
                        <p className="font-semibold text-[9px] sm:text-xs">Miguel Ángel Campos</p>
                        <div className="flex flex-col sm:flex-row sm:space-x-1.5 text-neutral-950 items-center">
                            <p className="font-medium text-[9px] text-red-400 sm:text-xs">{article.category}</p>
                            <p className="text-neutral-400 text-[8px] sm:text-[10px]">{formattedDate}</p>
                        </div>
                    </div>
                </div>
                <div className="sm:h-[106px] sm:mt-2 mt-1.5">
                    <p className="font-medium text-[11px] sm:text-sm sm:font-semibold text-neutral-800 leading-3 sm:leading-5">
                        {article.title}
                    </p>
                    {article.content && (
                        <div className="text-[11px] mx-0.5 sm:text-sm text-neutral-600 sm:line-clamp-4 line-clamp-3 leading-3 sm:leading-4">
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        </div>
                    )}
                </div>
            </article>
        </Link>
    );
};

export default ArticleDeporte;
