export type Article = {
  page: Page;
  englishPage: Page;
}

export type Page = {
  id: string;
  title: string;
  description: string;
  banner?: string;
  created_at: string;
}
