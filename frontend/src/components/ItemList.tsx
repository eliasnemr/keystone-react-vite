import { useQuery, gql } from '@apollo/client';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';

const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
        title
        content {
        document 
        }
    }
}
`;

interface Item {
  id: string;
  title: string;
  content: DocumentRendererProps;
}

export function ItemList() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="text-center p-4 text-red-600">
      <p className="text-xl">Error: {error.message}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-white opacity-100">All Posts</h2>
      <div className="space-y-8">
        {data.posts.map((item: Item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <DocumentRenderer document={item.content.document} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 