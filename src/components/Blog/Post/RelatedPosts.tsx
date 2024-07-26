import React from 'react';
import TopographyHeading from '@/components/Topography/TopographyHeading';
import Grid from '@/components/Blog/Grid/Grid';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/list-controller';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/list-controller';
import GridItem from '@/components/Blog/Grid/GridItem';

interface ComponentProps {
  exceptedSlug: string;
}

export default async function RelatedPosts({
  exceptedSlug,
}: ComponentProps): Promise<React.ReactElement> {
  const posts: PostItemData[] = await getBlogPosts({
    limit: 3,
    exceptedSlugs: [exceptedSlug],
  });

  return (
    <section className="mb-12 md:mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TopographyHeading level={2} tag="span" className="mb-12 text-center">
          Related posts
        </TopographyHeading>

        <Grid>
          {posts.map((post: PostItemData) => (
            <GridItem post={post} key={post.slug} />
          ))}
        </Grid>
      </div>
    </section>
  );
}