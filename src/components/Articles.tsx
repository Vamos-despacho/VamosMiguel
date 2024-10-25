import Link from "next/link";

import Image from "next/image";
import { IArticle, IGArticle } from "@/interface/article";
import ArticleContentCard from "./ArticleContentCard";
interface Props {
  article: IGArticle;
}
const Articles = ({ article }: Props) => {
  // const formattedDate = new Date(article.createdAt).toLocaleDateString();
  const formattedDate = new Date(article.createdAt!).toLocaleDateString(
    "es-ES",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link href={`/articulos/articulo/${article.slug}`}>
      <article
        className="bg-white relative shadow-md
         rounded-xl px-2 sm:p-4 ring-1 ring-neutral-950/5 transition
          hover:bg-neutral-50  max-w-sm  h-[300px] sm:h-[465px] "
      >
        <div className="h-[132px] sm:h-[212px]  md:h-[220px] ">
          {article.imageUrl ? (
            <div className="absolute top-0 left-0 right-0 h-auto rounded-t-xl ">
              <Image
                alt={article.title}
                src={article.imageUrl}
                width={480}
                height={280}
                className="rounded-t-xl h-32 sm:h-56 object-cover ransition-transform transform hover:scale-110 "
              />
            </div>
          ) : (
            <div className="absolute top-0 left-0 right-0 h-auto rounded-t-xl ">
              <Image
                alt={article.title}
                src="/logovm.png"
                width={480}
                height={280}
                className="rounded-t-xl h-56 object-cover ransition-transform transform hover:scale-110 "
              />
            </div>
          )}
          <div></div>
        </div>
        <div className="flex mt-2 sm:space-x-4 items-center space-x-1 m-auto">
          <Image
            alt="Miguel Angel"
            src="/images/MiguelA.jpg"
            className="rounded-full sm:w-auto lg:w-16 w-10 "
            loading="lazy"
            width="64"
            height="64"
            decoding="async"
            data-nimg="1"
          />
          <div className="sm:space-y-1">
            <p className="  font-semibold text-[10px] sm:text-sm">
              Miguel Ángel Campos
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-2  text-neutral-950  items-center">
              <p className=" font-medium text-[10px] text-red-400 sm:text-sm">
                {article.category.name}
              </p>
              <p className="text-neutral-400 text-[9px] sm:text-xs">
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:h-[118px]  sm:mt-3 mt-2    ">
          <div className="    ">
            <p className=" font-medium  text-xs sm:text-base sm:font-semibold text-neutral-800 sm:leading-5 leading-3">
              {article.title}
            </p>
          </div>
          <div className=" flex sm:mt-2 mt-1">
            {
              article.content && (
                <ArticleContentCard contentFromDatabase={article.content} />
              )
              // <div
              //     className=' text-[12px] mx-1 text-xs sm:text-sm text-neutral-600 sm:line-clamp-4 line-clamp-4 sm:leading-4 leading-3 font-display'
              //     dangerouslySetInnerHTML={{ __html: article.content }}>
              // </div>
            }
          </div>
        </div>
        {/* <div className='flex justify-end items-center    '>
                    <Button arial-label='Leer más' variant="link" className=' h-3 text-[10px] sm:text-base'>Leer más</Button>
                </div> */}
      </article>
    </Link>
  );
};

export default Articles;
