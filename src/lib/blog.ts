export async function getLastPublishedPosts() {
    const query = `
        query AllPosts {
            posts(first: 3, where: { language: EN, orderby: { field: DATE, order: DESC } }) {
                edges {
                    node {
                        id
                        title
                        slug
                        categories {
                            nodes {
                                id
                                name
                            }
                        }
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        }
    `;

    const graphqlEndpoint = process.env.WP_GRAPQL_URL || '';
    
    const response = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
        // cache: 'force-cache',
        // next: { revalidate: 86400 }
    });

    const { data } = await response.json();

    
    // Transform GraphQL response to match expected format
    return data?.posts?.edges?.map((edge: any) => ({
        id: edge.node.id,
        title: {
            rendered: edge.node.title
        },
        categories: edge.node.categories.nodes.map((category: any) => category.name),
        slug: edge.node.slug,
        featuredImage: edge.node.featuredImage?.node
    })) || [];
}