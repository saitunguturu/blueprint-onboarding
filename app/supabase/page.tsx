import AllPosts from '../../components/PostList';

export default function SupabasePage() {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Supabase Posts</h1>
      <AllPosts />
    </main>
  );
}
