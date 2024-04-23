export interface NextPageProps<T = string> {
  params: { id: T };
  searchParams?: { [key: string]: string | string[] | undefined };
}
