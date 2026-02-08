
export async function generateStaticParams() {
  const posts: { id: number }[] = await fetch(
    'https://api.vercel.app/blog'
  ).then((res) => res.json())

  return posts.map((post) => ({
    id: `${post.id}`,
  }))
}

async function getPost(id: string) {
  const res = await fetch(
    `https://api.vercel.app/blog/${id}`,
    { cache: 'force-cache' } // important
  )
  return res.json()
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  
  const post = await getPost((await params).id)

  return (
    <div className='w-full min-h-[90vh] px-[32px] md:max-w-[768px] md:mx-auto'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

