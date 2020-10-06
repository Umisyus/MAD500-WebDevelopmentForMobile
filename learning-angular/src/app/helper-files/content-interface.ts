export interface Content {
  id: number;
  author: string;
  title: string;
  body: string;
  imgUrl?: string;
  type?: string
  tags?: string[];
}
