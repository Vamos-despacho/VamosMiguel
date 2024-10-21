export type User = {
    id: number;
    email: string;
    password: string;
    name: string;
    img?: string | null;
    role: string;
    posts: Post[];
    createAt: string; // Ajusta el tipo de fecha según tu formato
};

export type Post = {
    id: string;
    title: string;
    content: string
    imageUrl?: string | null;
    published: boolean;
    author: User;
    authorId: number;
    createdAt: string; // Ajusta el tipo de fecha según tu formato
    updatedAt: string; // Ajusta el tipo de fecha según tu formato
    commentCount: number;
    likeCount: number;
    externalLink?: string | null;
    slug: string;
    views: number;
    category: ICategory;
    categoryId: number;
    tags: ITag[];
};
export type PostA = {
    id: number;
    title: string;
    content: string
    imageUrl?: string | null;
    published: boolean;
    authorId: number;
    createdAt: string; // Ajusta el tipo de fecha según tu formato
    updatedAt: string; // Ajusta el tipo de fecha según tu formato
    commentCount: number;
    likeCount: number;
    externalLink?: string | null;
    slug: string;
    views: number;
    category: ICategory;
    categoryId: number;
    tags: ITag[];
};

export type ITag = {
    id: number;
    name: string;

};
export type ITagA = [{
    id: number;
    name: string;

}];

export type ICategory = {
    _id: string;
    name: string;

};
